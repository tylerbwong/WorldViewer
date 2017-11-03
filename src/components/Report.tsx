import React from 'react';
import Row from './Row';
import HeaderRow from './HeaderRow';
import { connect } from 'react-redux';
import { ReportAction, hoverAction, sortAction, selectAction } from '../actions';
import { ReportState } from '../reducers';
import './Report.css';

interface ReportProps {
  rows: { country: string, year: number, spending: number, id: number }[];
  cols: { dataField: string, name: string }[];
  selectedRow: { country: string, year: number, spending: number, id: number };
  sortField: { dataField: string, ascending: boolean };
  hoveredRowId: number;
  onMouseOver: (rowId: number) => {};
  onMouseOut: (rowId: number) => {};
  onClickHeader: (dataField: string) => {};
  onClickRow: (row: { country: string, year: number, spending: number, id: number }) => {};
}

class Report extends React.Component<ReportProps, {}> {   
  render() {
    var rows = this.props.rows.map(row => {
      let rowIsHovered = this.props.hoveredRowId === row.id;
      let rowIsSelected = this.props.selectedRow.id === row.id;

      return (
        <Row row={row} cols={this.props.cols} 
             selected={rowIsSelected} hovered={rowIsHovered}
             onClick={() => this.props.onClickRow(row)}
             onMouseOver={() => this.props.onMouseOver(row.id)} 
             onMouseOut={() => this.props.onMouseOut(row.id)}/>
      );
    });
    
    return (
      <table cellPadding="0" cellSpacing="0">
        <HeaderRow cols={this.props.cols} sortField={this.props.sortField} onClickHeader={this.props.onClickHeader}/>
        <tbody>
          {rows}  
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: ReportState) => {
  return {
    rows: state.rows,
    cols: state.cols,
    selectedRow: state.selectedRow,
    sortField: state.sortField,
    hoveredRowId: state.hoveredRowId
  };
};

const mapDispatchToProps = (dispatch: (action: ReportAction) => {}) => {
  return {
    onMouseOver: (rowId: number) => dispatch(hoverAction(rowId)),
    onMouseOut: (rowId: number) => dispatch(hoverAction(-1)),
    onClickHeader: (dataField: string) => dispatch(sortAction(dataField)),
    onClickRow: (row: { country: '', year: -1, spending: -1, id: -1 }) => dispatch(selectAction(row))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
