import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import cmc from '../api/cmc';
import Coin from '../components/Coin';
import TopBar from '../components/TopBar';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      top10: []
    };
  }

  async componentDidMount() {
    const top10 = await cmc.top10.get();
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
