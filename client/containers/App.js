import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import lodash from 'lodash'

export class App extends Component {
  componentWillMount() {
    this.state = { entry: this.props.entry }
  }

  render() {
    return <div className="column">
             <Entry entry={this.state.entry} key={this.state.entry.id} />
           </div>
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries.fetched,
    entry: state.entries.rendered[0]
  }
}

export const AppConnect = connect(mapStateToProps)(App);
