import React, { Component } from 'react';
import apiConfig from '../api/apiConfig';
// import sensorsApi from '../api/sensorsApi';
// import sensorsMockApi from '../api/sensorsMockApi';
import sensorsApi from '../api/sensorsApi';
import sensorsMockApi from '../api/sensorsMockApi';
import SensorShow from '../components/sensors/SensorShow';
import store from '../store';

const api = apiConfig.mockSensors ? sensorsMockApi : sensorsApi;

class SensorsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensor: {}
    };
    store.clicks = 0;
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
    store.clicks += 1;
  }

  render = () => (
    <div className="Sensor">
      <SensorShow sensor={this.state.sensor} />
    </div>
  );
}

export default SensorsContainer;
