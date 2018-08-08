import { combineReducers } from 'redux'
import counter from './counter'
import brokenCounter from './brokenCounter'

export default combineReducers({
  counter,
  brokenCounter
});
