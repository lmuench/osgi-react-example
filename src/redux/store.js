import { createStore } from 'redux';
import { counter } from './reducers';
import config from '../config';

let store = null;
if (config.useReduxChromeExtension) {
  store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(counter);
}

export default store;
