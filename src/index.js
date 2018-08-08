import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
