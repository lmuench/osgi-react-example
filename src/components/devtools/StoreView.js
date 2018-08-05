import React from 'react';

const StoreView = props => (
    <pre style={{ 
      textAlign: 'left',
      color: '#579',
      position: 'fixed',
      left: 12,
      bottom: 0 
    }}>
      store: {JSON.stringify(props.store, null, 2)}
    </pre>
);

export default StoreView;