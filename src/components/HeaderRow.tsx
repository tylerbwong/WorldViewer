import React from 'react';
import HeaderCell from './HeaderCell';

interface HeaderRowProps {
  cols: { dataField: string, name: string }[];
  sortField: { dataField: string, ascending: boolean };
  onClickHeader: (dataField: string) => {};
}

class HeaderRow extends React.Component<HeaderRowProps, {}> {
  render() {
    let cells = this.props.cols.map(col => {
      return (
          <HeaderCell col={col} 
                      sortField={this.props.sortField} 
                      onClick={() => this.props.onClickHeader(col.dataField)}/>
      );
    });
    
    return <thead>{cells}</thead>;
  }
}

export default HeaderRow;