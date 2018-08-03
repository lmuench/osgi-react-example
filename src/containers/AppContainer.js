import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import apiConfig from '../api/apiConfig';
import conferencesApi from '../api/conferencesApi';
import conferencesMockApi from '../api/conferencesMockApi';
import ConferencesContainer from '../containers/ConferencesContainer';
import TopBar from '../components/TopBar';

const api = apiConfig.mock ? conferencesMockApi : conferencesApi;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conferences: []
    };
  }

  async componentDidMount() {
    this.setState({
      conferences: await api.get()
    });
  }

  render = () => (
    <div className="App">
      <TopBar path="conferences" items={this.state.conferences} />
      <Route path="/conferences/:name" component={ConferencesContainer} />
    </div>
  );
}

export default App;
