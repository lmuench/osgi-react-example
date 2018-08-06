import React, { Component } from 'react';
import config from '../config';
import sensorsApi from '../api/sensorsApi';
import sensorsMockApi from '../api/sensorsMockApi';
import SensorShow from '../components/sensors/SensorShow';
import { _incrementSensorContainerUpdates } from '../actions';

const api = config.mockSensorsApi ? sensorsMockApi : sensorsApi;

class SensorsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensor: {}
    };
  }

  async componentDidMount() {
    this.setState({
      sensor: await api.name.get(this.props.match.params.name)
    });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    this.setState({
      sensor: await api.name.get(this.props.match.params.name)
    });
    _incrementSensorContainerUpdates();
  }

  render = () => (
    <div className="Sensor">
      <SensorShow sensor={this.state.sensor} />
    </div>
  );
}

export default SensorsContainer;
