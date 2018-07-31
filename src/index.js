import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import registerServiceWorker from './registerServiceWorker';
// import $ from "jquery";
// import Popper from "popper.js";
import './styles.scss';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
