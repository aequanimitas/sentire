import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';

class App extends Component {
  render() {
    return <div className={'row'}>
      {this.props.entries.map(entry => {
        return <Entry entry={entry} key={entry.id} />
      })}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries
  }
}

export default connect(mapStateToProps)(App);
