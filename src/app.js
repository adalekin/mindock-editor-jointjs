import * as joint from 'rappid';
import $ from 'jquery';
import _ from 'lodash';

import { Topic } from './shapes';

class App {
  constructor(el, keyboardService) {
    this.el = el;

    // apply current joint js theme
    const view = new joint.mvc.View({ el });
    view.delegateEvents({
      'mouseup input[type="range"]': (evt) => evt.target.blur(),
    });

    this.keyboardService = keyboardService;
  }

  loadData(nodes, links) {
    const nodeMap = {};

    nodes.forEach(({ id, text, side }) => {
      nodeMap[id] = this.createNode(id, text, side);
    });

    links.forEach(({ id, source, target }) => {
      this.createLink(id, nodeMap[source], nodeMap[target]);
    });

    this.graphLayout.layout();
  }

  createNode(id, text, side) {
    const topic = new Topic();
    topic.attr({
      label: {
        text,
      },
    });

    if (side !== undefined) {
      if (side === 'left') {
        topic.set('direction', 'L');
      } else {
        topic.set('direction', 'R');
      }
    }

    topic.addTo(this.graph);

    return topic;
  }

  createLink(id, source, target) {
    const link = new joint.shapes.standard.Link({
      source: { id: source.id },
      target: { id: target.id },
    });

    link.addTo(this.graph);

    return link;
  }

  start() {
    joint.setTheme('modern');

    this.initializePaper();
    this.initializeSelection();
    this.initializeKeyboardShortcuts();
  }

  stop() {
    this.paper.remove();
    this.paperScroller.remove();
    this.selection.remove();
    this.keyboardService.keyboard.stopListening();
  }

  initializePaper() {
    this.graph = new joint.dia.Graph();

    this.graphLayout = new joint.layout.TreeLayout({
      graph: this.graph,
      parentGap: 120,
      siblingGap: 50,
    });

    this.commandManager = new joint.dia.CommandManager({ graph: this.graph });

    this.paper = new joint.dia.Paper({
      width: 1000,
      height: 1000,
      gridSize: 10,
      drawGrid: true,
      model: this.graph,
      interactive: { linkMove: false },
      async: true,
      sorting: joint.dia.Paper.sorting.APPROX,
    });

    this.paper.on('blank:mousewheel', _.partial(this.onMousewheel, null), this);
    this.paper.on('cell:mousewheel', this.onMousewheel.bind(this));

    this.snaplines = new joint.ui.Snaplines({ paper: this.paper });

    this.paperScroller = new joint.ui.PaperScroller({
      paper: this.paper,
      autoResizePaper: true,
      scrollWhileDragging: true,
      cursor: 'grab',
    });

    this.renderPlugin('.paper-container', this.paperScroller);
    this.paperScroller.render().center();

    new joint.ui.TreeLayoutView({
      paper: this.paper,
      model: this.graphLayout,
      className: 'tree-layout member-tree-layout',
      useModelGeometry: true,
      clone: (element) => {
        const clone = element.clone();
        clone.attr(['memberAddButtonBody', 'display'], 'none');
        clone.attr(['memberRemoveButtonBody', 'display'], 'none');
        clone.attr(['body', 'stroke'], 'none');
        return clone;
      },
      previewAttrs: {
        parent: {
          rx: 120,
          ry: 120,
        },
      },
    });
  }

  initializeSelection() {
    this.clipboard = new joint.ui.Clipboard();
    this.selection = new joint.ui.Selection({ paper: this.paper, useModelGeometry: true });
    this.selection.collection.on('reset add remove', this.onSelectionChange.bind(this));

    const { keyboard } = this.keyboardService;

    // Initiate selecting when the user grabs the blank area of the paper while the Shift key is pressed.
    // Otherwise, initiate paper pan.
    this.paper.on('blank:pointerdown', (evt, x, y) => {
      if (keyboard.isActive('shift', evt)) {
        this.selection.startSelecting(evt);
      } else {
        this.selection.collection.reset([]);
        this.paperScroller.startPanning(evt);
        this.paper.removeTools();
      }
    });

    this.paper.on('element:pointerdown', (elementView, evt) => {
      // Select an element if CTRL/Meta key is pressed while the element is clicked.
      if (keyboard.isActive('ctrl meta', evt)) {
        this.selection.collection.add(elementView.model);
      }
    });

    this.graph.on('remove', (cell) => {
      // If element is removed from the graph, remove from the selection too.
      if (this.selection.collection.has(cell)) {
        this.selection.collection.reset(this.selection.collection.models.filter(c => c !== cell));
      }
    });

    this.selection.on('selection-box:pointerdown', (elementView, evt) => {
      // Unselect an element if the CTRL/Meta key is pressed while a selected element is clicked.
      if (keyboard.isActive('ctrl meta', evt)) {
        this.selection.collection.remove(elementView.model);
      }
    }, this);
  }

  initializeKeyboardShortcuts() {
    this.keyboardService.create(this.graph, this.clipboard, this.selection, this.paperScroller, this.commandManager);
  }

  onMousewheel(cellView, evt, ox, oy, delta) {
    if (this.keyboardService.keyboard.isActive('alt', evt)) {
      evt.preventDefault();
      this.paperScroller.zoom(delta * 0.2, {
        min: 0.2, max: 5, grid: 0.2, ox, oy,
      });
    }
  }

  renderPlugin(selector, plugin) {
    this.el.querySelector(selector).appendChild(plugin.el);
    plugin.render();
  }

  onSelectionChange() {
    const { paper, selection } = this;
    const { collection } = selection;
    paper.removeTools();
    joint.ui.Halo.clear(paper);
    joint.ui.FreeTransform.clear(paper);
    joint.ui.Inspector.close();
    if (collection.length === 1) {
      const primaryCell = collection.first();
      const primaryCellView = paper.requireView(primaryCell);
      selection.destroySelectionBox(primaryCell);
      this.selectPrimaryCell(primaryCellView);
    } else if (collection.length === 2) {
      collection.each((cell) => {
        selection.createSelectionBox(cell);
      });
    }
  }

  selectPrimaryCell(cellView) {
    const cell = cellView.model;
    if (cell.isElement()) {
      this.selectPrimaryElement(cellView);
    } else {
      this.selectPrimaryLink(cellView);
    }
    // this.inspectorService.create(cell);
  }

  selectPrimaryElement(elementView) {
    const element = elementView.model;

    new joint.ui.FreeTransform({
      cellView: elementView,
      allowRotation: false,
      preserveAspectRatio: !!element.get('preserveAspectRatio'),
      allowOrthogonalResize: element.get('allowOrthogonalResize') !== false,
    }).render();

    // this.haloService.create(elementView);
  }

  selectPrimaryLink(linkView) {
    const ns = joint.linkTools;
    const toolsView = new joint.dia.ToolsView({
      name: 'link-pointerdown',
      tools: [
        new ns.Vertices(),
        new ns.SourceAnchor(),
        new ns.TargetAnchor(),
        new ns.SourceArrowhead(),
        new ns.TargetArrowhead(),
        new ns.Segments(),
        new ns.Boundary({ padding: 15 }),
        new ns.Remove({
          offset: -20,
          distance: 40,
        }),
      ],
    });

    linkView.addTools(toolsView);
  }

  applyOnSelection(method) {
    this.graph.startBatch('selection');
    this.selection.collection.models.forEach((model) => {
      model[method]();
    });
    this.graph.stopBatch('selection');
  }
}

export default App;
