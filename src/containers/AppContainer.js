import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import apiConfig from '../api/apiConfig';
// import sensorsApi from '../api/sensorsApi';
// import sensorsMockApi from '../api/sensorsMockApi';
import sensorsApi from '../api/sensorsApi';
import sensorsMockApi from '../api/sensorsMockApi';
import SensorsContainer from '../containers/SensorsContainer';
import TopBar from '../components/TopBar';
import store from '../store';
import StoreView from '../components/devtools/StoreView'

const api = apiConfig.mockSensors ? sensorsMockApi : sensorsApi;

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
      <Route path="/sensors/:name" component={SensorsContainer} />
      <StoreView store={store} />
    </div>
  );
}

export default App;
