export type ReportAction
  = { type: 'SORT', dataField: string }
  | { type: 'SELECT', row: { country: string, year: number, spending: number, id: number } }
  | { type: 'HOVER', row: { country: string, year: number, spending: number, id: number } };

export const ACTION_SORT: 'SORT' = 'SORT';
export const ACTION_SELECT: 'SELECT' = 'SELECT';
export const ACTION_HOVER: 'HOVER' = 'HOVER';

export function sortAction(dataField: string): ReportAction {
  return {
    type: ACTION_SORT, 
    dataField: dataField
  };
}

export function selectAction(row: { country: string, year: number, spending: number, id: number }): ReportAction {
  return {
    type: ACTION_SELECT,
    row: row
  };
}

export function hoverAction(row: { country: string, year: number, spending: number, id: number }): ReportAction {
  return {
    type: ACTION_HOVER,
    row: row
  };
}
