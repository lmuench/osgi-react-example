import React from 'react';
import capitalize from 'lodash/capitalize';

const Th = props => Object.keys(props.sensor).map((key, i) =>
  <th key={i}>{capitalize(key)}</th>
);
const Td = props => Object.values(props.sensor).map((value, i) =>
  <td key={i}>{value}</td>)
;

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
