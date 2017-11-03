import { ReportAction } from '../actions';

export type ReportState = {
  selectedRow: { country: string, year: number, spending: number, id: number },
  hoveredRowId: number,
  sortField: { dataField: string, ascending: boolean },
  rows: { country: string, year: number, spending: number, id: number }[],
  cols: { name: string, dataField: string }[]
}

export function reportReducer(state: ReportState, action: ReportAction) {
  switch(action.type) {
    case 'SELECT':
      return { ...state, selectedRow: state.selectedRow.id != action.row.id ? action.row : { country: '', year: -1, spending: -1, id: -1 } };
    case 'HOVER':
      return { ...state, hoveredRowId: action.rowId };
    case 'SORT':
      var ascending = state.sortField.dataField == action.dataField ? !state.sortField.ascending : true;
      let newSortField = { dataField: action.dataField, ascending: ascending };
      let newRows = [...state.rows];
        
      newRows.sort((r1, r2) => {
        var v1 = r1[newSortField.dataField];
        var v2 = r2[newSortField.dataField];
        var comp = 0;
            
        if (v1 > v2) {
          comp = 1;
        }
        else if (v1 < v2) {
          comp = -1;
        }
            
        if (!newSortField.ascending) {
          comp *= -1;
        }
          
        return comp;
      });
        
      return {...state, rows: newRows, sortField: newSortField};
    default:
      return state;
  }
}
