import React from 'react';

const Coin = ({ match }) => (
  <h1>{match.params.symbol}</h1>
);

export default Coin;
