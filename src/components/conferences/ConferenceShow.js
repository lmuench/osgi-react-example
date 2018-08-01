import React from 'react';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const Th = props => Object.keys(props.conference).map(key => <th>{key.capitalize()}</th>);
const Td = props => Object.values(props.conference).map(value => <td>{value}</td>);

const ConferenceShow = props => (
  <table>
    <tr>
      <Th conference={props.conference} />
    </tr>
    <tr>
      <Td conference={props.conference} />
    </tr>
  </table>
);

export default ConferenceShow;
