import React from 'react';
import './HeaderCell.css';

interface HeaderCellProps {
    sortField: { dataField: string, ascending: boolean };
    col: { dataField: string, name: string };
    onClick: () => {};
}

class HeaderCell extends React.Component<HeaderCellProps, {}> {
  render() {
    let sortArrowClass = '';
      
    if (this.props.sortField.dataField === this.props.col.dataField) {
      sortArrowClass = this.props.sortField.ascending ? 'arrowUp' : 'arrowDown';
    }
    
    return (
      <th onClick={this.props.onClick}>
        {this.props.col.name}
        <div className="arrowContainer">
          <div className={sortArrowClass}/>
        </div>
      </th>
    );
  }     
}

export default HeaderCell;
