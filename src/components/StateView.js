import React from 'react';

const StateView = props => {
  return (
    <pre style={{
      fontSize: '85%',
      textAlign: 'left',
      color: '#579',
      position: 'fixed',
      left: 12,
      bottom: 0
    }}>
      {
        Object.keys(props.state).map(key =>
          `${key}: ${JSON.stringify(props.state[key], null, 2)}\n`
        )
      }
    </pre>
  );
};

export default StateView;
