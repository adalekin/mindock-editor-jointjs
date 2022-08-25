import { shapes } from 'rappid';

export const Topic = shapes.standard.TextBlock.define('mindock.Topic', {
  size: {
    width: 120,
    height: 36,
  },
  attrs: {
    body: {
      refWidth: '100%',
      refHeight: '100%',
      rx: 15,
      ry: 15,
      strokeWidth: 3,
      stroke: 'transparent',
      fill: '#eee',
      padding: 50,
    },
    label: {
      textVerticalAnchor: 'middle',
      textAnchor: 'middle',
      fill: '#161616',
      fontSize: 17,
    },
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'text',
      selector: 'label',
    },
  ],
});
