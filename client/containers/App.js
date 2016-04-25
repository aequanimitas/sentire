import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import { fetchEntries, setCurrentEntry } from '../actions';
import lodash from 'lodash'

export class App extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
  }

  next() {
    this.props.dispatch(setCurrentEntry({
      entries: this.props.entries
    })) 
  }

  render() {
    let entry = this.props.entry;
    if (!entry) {
      return <div className="column"><h1>Loading stoic quotes</h1></div>
    }
    return <div className="column main-app">
             <Entry entry={entry} key={entry.id} />
             <div className="btn-wrapper">
               <button className="butones" onClick={this.next}>Random Stoic Quote</button>
             </div>
           </div>
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    entries: state.entries,
    entry: state.entries.current
  }
}

export const AppConnect = connect(mapStateToProps)(App);
