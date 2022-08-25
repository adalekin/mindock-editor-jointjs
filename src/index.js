import './index.scss';
import App from './app';
import { KeyboardService } from './services';
import 'rappid/build/package/rappid.css';
import { links, nodes } from './config/sample-mindmap';

const app1 = new App(document.getElementById('root'), new KeyboardService());
app1.start();
app1.loadData(nodes, links);

const app2 = new App(document.getElementById('root'), new KeyboardService());
app2.start();
app2.loadData(nodes, links);
