import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import api from './api';
import Coin from './Coin';
import TopBar from './TopBar';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      top10: []
    };    
  }

  async componentDidMount() {
    const top10 = await api.fetchPairs();
    this.setState({
      top10: top10
    });
  }

  render = () => (
    <div className="App">
      <TopBar items={this.state.top10} />
      <Route path={`/coins/:symbol`} component={Coin} />
    </div>
  );
}

export default App;
