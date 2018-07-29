import React, { Component } from 'react';
import './App.css';
import { Link, Route} from 'react-router-dom';

const Coin = ({ match }) => {
  return <h1>{match.params.symbol}</h1>;
}

const TopBar = props => (
  props.items.map(v =>
    <span key={v.id}><Link to={`/coins/${v.symbol}`}>{v.symbol}</Link> </span>
  )
);

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      top10: []
    };
    this.fetchPairs();
  }

  fetchPairs = async () => {
    const res = await fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10');
    const json = await res.json();
    if (!json.data) return;
    this.setState({
      top10: Object.values(json.data)
    });
  }

  render = () => (
    <div className="App">
      <div className="TopBar">
        <TopBar items={this.state.top10} />
      </div>
      <div className="Body">
        <Route path={`/coins/:symbol`} component={Coin} />
      </div>
    </div>
  );
}

export default App;
