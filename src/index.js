import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import registerServiceWorker from './registerServiceWorker';
import './styles.scss';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
