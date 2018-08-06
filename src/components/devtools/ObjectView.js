import React from 'react';

const ObjectView = props => (
    <pre style={{
      fontSize: '85%', 
      textAlign: 'left',
      color: '#579',
      position: 'fixed',
      left: 12,
      bottom: 0
    }}>
      {
        Object.keys(props.object).map(key => 
          `${key}: ${JSON.stringify(props.object[key], null, 2)}\n`
        )
      }
    </pre>
);

export default ObjectView;