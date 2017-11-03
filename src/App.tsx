import React from 'react';
import WorldViewer from './components/WorldViewer';
import Report from './components/Report';
import { connect } from 'react-redux';
import { ReportState } from './reducers';
import './App.css';

interface AppProps {
  selectedPathId: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <WorldViewer selectedPathId={this.props.selectedPathId} highlightColor={'green'}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Report/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReportState) => {
  return {
    selectedPathId: state.selectedRow.country
  };
};

export default connect(mapStateToProps)(App);
