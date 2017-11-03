import React from 'react';

namespace Cell {
  export interface Props {
    row: { id: number };
    col: { dataField: string };
  }
}

class Cell extends React.Component<Cell.Props, {}> {
  render() { 
    return (
      <td>
        {this.props.row[this.props.col.dataField]}
      </td>
    );
  }
}

export default Cell;
