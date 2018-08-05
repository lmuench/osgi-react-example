import React from 'react';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const Th = props => Object.keys(props.sensor).map(key => <th>{key.capitalize()}</th>);
const Td = props => Object.values(props.sensor).map(value => <td>{value}</td>);

const SensorShow = props => (
  <table>
    <thead>
      <tr>
        <Th sensor={props.sensor} />
      </tr>
    </thead>
    <tbody>
      <tr>
        <Td sensor={props.sensor} />
      </tr>
    </tbody>
  </table>
);

export default SensorShow;
