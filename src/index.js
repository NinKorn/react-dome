import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWord from './helloWorld';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HelloWord name='react'/>, document.getElementById('root'));

serviceWorker.unregister();
