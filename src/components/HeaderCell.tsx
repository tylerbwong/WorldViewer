import React from 'react';
import './HeaderCell.css';

namespace HeaderCell {
  export interface Props {
    sortField: { dataField: string, ascending: boolean };
    col: { dataField: string, name: string };
    onClick: () => {};
  }
}

const HeaderCell = (props: HeaderCell.Props) => {
  let sortArrowClass = '';
    
  if (props.sortField.dataField === props.col.dataField) {
    sortArrowClass = props.sortField.ascending ? 'arrowUp' : 'arrowDown';
  }
  
  return (
    <th onClick={props.onClick}>
      {props.col.name}
      <div className="arrowContainer">
        <div className={sortArrowClass}/>
      </div>
    </th>
  );   
};

export default HeaderCell;
