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

const api = config.mockSensorsApi ? sensorsMockApi : sensorsApi;

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
      <TopBar path="sensors" items={this.state.sensors} />
      {/* <Route path="/sensors/:name" component={SensorsContainer} /> */}
      <ApiBuilderContainer2 />
      {config.showStore && <StateView />}
    </div>
  );
}

export default App;
