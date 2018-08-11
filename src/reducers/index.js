import { combineReducers } from 'redux'
import counter from './counter'
import brokenCounter from './brokenCounter'
import { reducer as sematable } from 'sematable';

export default combineReducers({
  counter,
  brokenCounter,
  sematable
});
