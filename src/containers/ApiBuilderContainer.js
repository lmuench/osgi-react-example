import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

const createRows = () => {
  const rows = [];
  for (let i = 0; i < 100; i++) {
    const type = 'smoke';
    const name = 'device';
    let row = {
      method: `Device ${i}`,
      type: type,
      path: `/${type}/${name}${i}`,
      name: `device${i}`,
      position: 'zw-07-17',
      children: [
        {
          method: 'POST',
          type: type,
          path: `/${type}/${name}${i}`,
          name: `device${i}`,
          position: 'zw-07-17'
        },
        {
          method: 'GET',
          type: type,
          path: `/${type}/${name}${i}`,
          name: `device${i}`,
          position: 'zw-07-17'
        },
        {
          method: 'PUT',
          type: type,
          path: `/${type}/${name}${i}`,
          name: `device${i}`,
          position: 'zw-07-17'
        },
        {
          method: 'DELETE',
          type: type,
          path: `/${type}/${name}${i}`,
          name: `device${i}`,
          position: 'zw-07-17'
        }
      ]
    };
    rows.push(row);
  }
  return rows;
}


const columns = [
  {
    key: 'method',
    name: 'Device / Method'
  },
  {
    key: 'type',
    name: 'Type'
  },
  {
    key: 'name',
    name: 'Name'
  },
  {
    key: 'path',
    name: 'Path',
    locked: true
  },
  {
    key: 'position',
    name: 'Position'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    let rows = createRows();
    this.state = { expanded: {}, rows: rows };
  }

  getRows = i => {
    return this.state.rows[i];
  };

  getSubRowDetails = rowItem => {
    let isExpanded = this.state.expanded[rowItem.name] ? this.state.expanded[rowItem.name] : false;
    return {
      group: rowItem.children && rowItem.children.length > 0,
      expanded: isExpanded,
      children: rowItem.children,
      field: 'method',
      treeDepth: rowItem.treeDepth || 0,
      siblingIndex: rowItem.siblingIndex,
      numberSiblings: rowItem.numberSiblings
    };
  };

  onCellExpand = args => {
    let rows = this.state.rows.slice(0);
    let rowKey = args.rowData.name;
    let rowIndex = rows.indexOf(args.rowData);
    let subRows = args.expandArgs.children;

    let expanded = Object.assign({}, this.state.expanded);
    if (expanded && !expanded[rowKey]) {
      expanded[rowKey] = true;
      this.updateSubRowDetails(subRows, args.rowData.treeDepth);
      rows.splice(rowIndex + 1, 0, ...subRows);
    } else if (expanded[rowKey]) {
      expanded[rowKey] = false;
      rows.splice(rowIndex + 1, subRows.length);
    }

    this.setState({ expanded: expanded, rows: rows });
  };

  updateSubRowDetails = (subRows, parentTreeDepth) => {
    let treeDepth = parentTreeDepth || 0;
    subRows.forEach((sr, i) => {
      sr.treeDepth = treeDepth + 1;
      sr.siblingIndex = i;
      sr.numberSiblings = subRows.length;
    });
  };

  render= () => (
    <ReactDataGrid
      enableCellSelect={true}
      columns={columns}
      rowGetter={this.getRows}
      rowsCount={this.state.rows.length}
      getSubRowDetails={this.getSubRowDetails}
      minHeight={500}
      onCellExpand={this.onCellExpand}
    />
  );
}

export default Example;
