import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import lodash from 'lodash'

export class App extends Component {
  render() {
    let { entries, single } = this.props
    let columnedEntries = lodash.chunk(entries, 3)
    return <div className="column">
             <Entry entry={entries[0]} key={entries[0].id} />
           </div>
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries
  }
}

export const AppConnect = connect(mapStateToProps)(App);
