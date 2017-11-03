import React from 'react';
import HeaderCell from './HeaderCell';

namespace HeaderRow {
  export interface Props {
    cols: { dataField: string, name: string }[];
    sortField: { dataField: string, ascending: boolean };
    onClickHeader: (dataField: string) => {};
  }
}

const HeaderRow = (props: HeaderRow.Props) => {
  let cells = props.cols.map(col => {
    return (
        <HeaderCell
          key={col.dataField} 
          col={col} 
          sortField={props.sortField} 
          onClick={() => props.onClickHeader(col.dataField)}
        />
    );
  });
  
  return <thead>{cells}</thead>;
};

export default HeaderRow;