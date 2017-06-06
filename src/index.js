import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('App'));
registerServiceWorker();
