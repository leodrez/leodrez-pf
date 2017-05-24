import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Body from './containers/Body/Body';
import Footer from './components/Footer/Footer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Header />, document.getElementById('header'));
registerServiceWorker();

ReactDOM.render(<Body />, document.getElementById('body'));

ReactDOM.render(<Footer />, document.getElementById('footer'));
