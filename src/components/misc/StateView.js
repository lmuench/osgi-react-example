import React from 'react';
import { connect } from 'react-redux';

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
        Object.keys(props.reduxState).map(key =>
          `${key}: ${JSON.stringify(props.reduxState[key], null, 2)}\n`
        )
      }
    </pre>
  );
};

const mapStateToProps = state => {
  return {
    reduxState: state 
  }
}

export default connect(mapStateToProps)(StateView);
