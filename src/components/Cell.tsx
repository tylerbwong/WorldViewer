import React from 'react';

namespace Cell {
  export interface Props {
    row: { id: number };
    col: { dataField: string };
  }
}

const Cell = (props: Cell.Props) => <td>{props.row[props.col.dataField]}</td>;

export default Cell;
