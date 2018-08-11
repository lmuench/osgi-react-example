import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import config from '../config';
import sensorsApi from '../api/sensorsApi';
import sensorsMockApi from '../api/sensorsMockApi';
import SensorsContainer from '../containers/SensorsContainer';
import TopBar from '../components/misc/TopBar';
import StateView from '../components/misc/StateView';
import ApiBuilderContainer from './ApiBuilderContainer';
import ApiBuilderContainer2 from './ApiBuilderContainer2';
import ResourceTable from './ResourceTable';

const api = config.mockSensorsApi ? sensorsMockApi : sensorsApi;

const ACTUATOR = 'ACTUATOR'
const SENSOR = 'SENSOR';
const SENSOR_SMOKE = 'SENSOR:SMOKE';
const SENSOR_TEMPERATURE = 'SENSOR:TEMPERATURE';

const resources = [
  {
    id: 1,
    name: 'smk1',
    type: SENSOR_SMOKE
  },
  {
    id: 2,
    name: 'smk4',
    type: SENSOR_SMOKE
  },
  {
    id: 3,
    name: 'window_left',
    type: ACTUATOR
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensors: []
    };
  }

  async componentDidMount() {
    this.setState({
      sensors: await api.get()
    });
  }
  
  render = () => (
    <div className="App">
      {/* <TopBar path="sensors" items={this.state.sensors} /> */}
      {/* <Route path="/sensors/:name" component={SensorsContainer} /> */}
      {/* <ApiBuilderContainer2 /> */}
      <ResourceTable data={resources} />
      {config.showStore && <StateView />}
    </div>
  );
}

export default App;
