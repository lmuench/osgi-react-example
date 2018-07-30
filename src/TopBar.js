import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = props => (
  props.items.map(v =>
    <span key={v.id}><Link to={`/coins/${v.symbol}`}>{v.symbol}</Link> </span>
  )
);

export default TopBar;
