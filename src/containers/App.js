import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import conferences from '../api/conferences';
import Conference from '../containers/Conference';
import TopBar from '../components/TopBar';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      conferences: []
    };
  }

  async componentDidMount() {
    this.setState({
      conferences: await conferences.get()
    });
  }

  render = () => (
    <div className="App">
      <TopBar path="conferences" items={this.state.conferences} />
      <Route path="/conferences/:name" component={Conference} />
    </div>
  );
}

export default App;
