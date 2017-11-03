import React from 'react';
import Row from './Row';
import HeaderRow from './HeaderRow';
import { connect } from 'react-redux';
import { ReportAction, hoverAction, sortAction, selectAction } from '../actions';
import { ReportState } from '../reducers';
import './Report.css';

namespace Report {
  export interface Props {
    rows: { country: string, year: number, spending: number, id: number }[];
    cols: { dataField: string, name: string }[];
    selectedRow: { country: string, year: number, spending: number, id: number };
    sortField: { dataField: string, ascending: boolean };
    hoveredRow: { country: string, year: number, spending: number, id: number };
    onMouseOver: (row: { country: string, year: number, spending: number, id: number }) => {};
    onMouseOut: (row: { country: string, year: number, spending: number, id: number }) => {};
    onClickHeader: (dataField: string) => {};
    onClickRow: (row: { country: string, year: number, spending: number, id: number }) => {};
  }
}

const Report = (props: Report.Props) => {   
  var rows = props.rows.map(row => {
    let rowIsHovered = props.hoveredRow.id === row.id;
    let rowIsSelected = props.selectedRow.id === row.id;

    return (
      <Row
        key={row.id} 
        row={row} 
        cols={props.cols} 
        selected={rowIsSelected}
        hovered={rowIsHovered}
        onClick={() => props.onClickRow(row)}
        onMouseOver={() => props.onMouseOver(row)} 
        onMouseOut={() => props.onMouseOut(row)}
      />
    );
  });
  
  return (
    <table cellPadding="0" cellSpacing="0">
      <HeaderRow 
        cols={props.cols} 
        sortField={props.sortField} 
        onClickHeader={props.onClickHeader}
      />
      <tbody>
        {rows}  
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: ReportState) => {
  return {
    rows: state.rows,
    cols: state.cols,
    selectedRow: state.selectedRow,
    sortField: state.sortField,
    hoveredRow: state.hoveredRow
  };
};

const mapDispatchToProps = (dispatch: (action: ReportAction) => {}) => {
  return {
    onMouseOver: (row: { country: string, year: number, spending: number, id: number }) => dispatch(hoverAction(row)),
    onMouseOut: (row: { country: string, year: number, spending: number, id: number }) => dispatch(hoverAction({ country: '', year: -1, spending: -1, id: -1 })),
    onClickHeader: (dataField: string) => dispatch(sortAction(dataField)),
    onClickRow: (row: { country: string, year: number, spending: number, id: number }) => dispatch(selectAction(row))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
