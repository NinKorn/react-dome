import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWord from './HelloWorld';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HelloWord name1='react' name2='vue'/>, document.getElementById('root'));

serviceWorker.unregister();
