import React from 'react';

interface CellProps {
  row: { id: number };
  col: { dataField: string };
}

class Cell extends React.Component<CellProps, any> {
    render() { 
       return (
         <td>
           {this.props.row[this.props.col.dataField]}
         </td>
       );
    }
}

export default Cell;
