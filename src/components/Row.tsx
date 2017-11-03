import React from 'react';
import Cell from './Cell';
import './Row.css';

interface RowProps {
  cols: { dataField: string }[];
  row: { id: number };
  hovered: boolean;
  selected: boolean;
  onMouseOver: () => any;
  onMouseOut: () => any;
  onClick: () => any;
}

class Row extends React.Component<RowProps, any> {
  render() {
    let cells = this.props.cols.map(col => {
      return <Cell row={this.props.row} col={col} />
    });

    let rowColorClass = "";
    
    if(this.props.hovered) {
      rowColorClass = "hoveredRow";
    }
    else if(this.props.selected) {
      rowColorClass = "selectedRow";
    }
    
    return (
      <tr key={this.props.row.id} 
          className={rowColorClass}
          onClick={this.props.onClick} 
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}>
        {cells}
      </tr>);
  }
}

export default Row;