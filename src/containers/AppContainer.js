import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import config from '../config';
import sensorsApi from '../api/sensorsApi';
import sensorsMockApi from '../api/sensorsMockApi';
import SensorsContainer from '../containers/SensorsContainer';
import TopBar from '../components/TopBar';
import store from '../store';
import ObjectView from '../components/devtools/ObjectView'

const api = config.mockSensorsApi ? sensorsMockApi : sensorsApi;

const WrappedObjectView = props => {
  if (props.showStore && props.showConfig) {
    return <ObjectView object={{ ...store, ...config }} />;
  } else if (props.showStore) {
    return <ObjectView object={store} />;
  } else if (props.showConfig) {
    return <ObjectView object={config} />;
  } else {
    return null;
  }
}

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
      <WrappedObjectView showStore={config.showStore} showConfig={config.showConfig} />
    </div>
  );
}

export default App;
