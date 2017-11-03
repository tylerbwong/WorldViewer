export type ReportAction
  = { type: 'SORT', dataField: string }
  | { type: 'SELECT', row: { country: '', year: -1, spending: -1, id: -1 } }
  | { type: 'HOVER', rowId: number };

export const ACTION_SORT: 'SORT' = 'SORT';
export const ACTION_SELECT: 'SELECT' = 'SELECT';
export const ACTION_HOVER: 'HOVER' = 'HOVER';

export function sortAction(dataField: string): ReportAction {
  return {
    type: ACTION_SORT, 
    dataField: dataField
  };
}

export function selectAction(row: { country: '', year: -1, spending: -1, id: -1 }): ReportAction {
  return {
    type: ACTION_SELECT,
    row: row
  };
}

export function hoverAction(rowId: number): ReportAction {
  return {
    type: ACTION_HOVER,
    rowId: rowId
  };
}
