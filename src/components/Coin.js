import React from 'react';

const Coin = ({ match }) => (
  <h1>{match.params.name}</h1>
);

export default Coin;
