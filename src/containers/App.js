import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import agenda from '../api/agenda';
import Coin from '../components/Coin';
import TopBar from '../components/TopBar';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      conferences: []
    };
  }

  async componentDidMount() {
    const conferences = await agenda.get();
    this.setState({
      conferences: Array.isArray(conferences) ? conferences : []
    });
  }

  render = () => (
    <div className="App">
      <TopBar path="agenda" items={this.state.conferences} />
      <Route path="/agenda/:name" component={Coin} />
    </div>
  );
}

export default App;
