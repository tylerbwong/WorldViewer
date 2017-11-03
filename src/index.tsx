import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Reducer, createStore } from 'redux';
import { ReportState, reportReducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';

const defaultState = {
  selectedRow: { country: '', year: -1, spending: -1, id: -1 },
  hoveredRow: { country: '', year: -1, spending: -1, id: -1 },
  sortField: {
    dataField: 'country',
    ascending: false
  },
  rows: [
    { country: 'US', year: 2017, spending: 5.4, id: 0 },
    { country: 'RU', year: 2017, spending: 4.1, id: 1 },
    { country: 'CN', year: 2017, spending: 6.2, id: 2 },
    { country: 'CA', year: 2017, spending: 4.2, id: 3 },
    { country: 'JP', year: 2017, spending: 6.3, id: 4 },
    { country: 'GR', year: 2017, spending: 5.1, id: 5 },
    { country: 'AU', year: 2017, spending: 4.0, id: 6 }
  ],
  cols: [
    { name: 'Country', dataField: 'country' },
    { name: 'Year', dataField: 'year' },
    { name: '% GDP', dataField: 'spending' }
  ]
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(reportReducer as Reducer<ReportState>, defaultState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
