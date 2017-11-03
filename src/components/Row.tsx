import React from 'react';
import Cell from './Cell';
import './Row.css';

namespace Row {
  export interface Props {
    cols: { dataField: string }[];
    row: { id: number };
    hovered: boolean;
    selected: boolean;
    onMouseOver: () => {};
    onMouseOut: () => {};
    onClick: () => {};
  }
}

const Row = (props: Row.Props) => {
  let cells = props.cols.map(col => {
    return( 
      <Cell
        key={props.row.id} 
        row={props.row}
        col={col}
      />
    );
  });

  let rowColorClass = '';
  
  if (props.hovered) {
    rowColorClass = 'hoveredRow';
  } else if (props.selected) {
    rowColorClass = 'selectedRow';
  }
  
  return (
    <tr 
      key={props.row.id} 
      className={rowColorClass}
      onClick={props.onClick} 
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      {cells}
    </tr>
  );
};

export default Row;