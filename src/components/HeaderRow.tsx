import React from 'react';
import HeaderCell from './HeaderCell';

namespace HeaderRow {
  export interface Props {
    cols: { dataField: string, name: string }[];
    sortField: { dataField: string, ascending: boolean };
    onClickHeader: (dataField: string) => {};
  }
}

class HeaderRow extends React.Component<HeaderRow.Props, {}> {
  render() {
    let cells = this.props.cols.map(col => {
      return (
          <HeaderCell
            key={col.dataField} 
            col={col} 
            sortField={this.props.sortField} 
            onClick={() => this.props.onClickHeader(col.dataField)}
          />
      );
    });
    
    return <thead>{cells}</thead>;
  }
}

export default HeaderRow;