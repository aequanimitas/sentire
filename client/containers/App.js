import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import { fetchEntries, markEntryRendered } from '../actions';
import lodash from 'lodash'

export class App extends Component {
  constructor(props) {
    super(props)
    this.nextOrFetch = this.nextOrFetch.bind(this)
  }

  nextOrFetch() {
    if (this.props.entries.hidden.length === 1) {
      this.props.dispatch(markEntryRendered(this.props.entry)) 
      this.props.dispatch(fetchEntries()) 
     } else {
      this.props.dispatch(markEntryRendered(this.props.entry)) 
     }
  }

  render() {
    let entry = this.props.entry;
    if (!entry) {
      return <div className="column"><h1>Loading stoic quotes</h1></div>
    }
    return <div className="column">
             <Entry entry={entry} key={entry.id} />
             <button className="butones" onClick={this.nextOrFetch}>One More</button>
           </div>
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    entries: state.entries,
    entry: state.entries.hidden[Math.floor(Math.random() * (state.entries.hidden.length - 1))]
  }
}

export const AppConnect = connect(mapStateToProps)(App);
