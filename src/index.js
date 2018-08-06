import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom';
import { _initStore } from './actions';

_initStore();

ReactDOM.render(
  <Router><AppContainer /></Router>,
  document.getElementById('root')
);
registerServiceWorker();
