import store from './store';

export function _initStore() {
  store.sensorContainerUpdates = 0;
}

export function _incrementSensorContainerUpdates() {
  store.sensorContainerUpdates += 1;
}
