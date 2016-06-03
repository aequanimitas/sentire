import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import { fetchEntries, entry } from '../actions';
import lodash from 'lodash'

export class App extends Component {
  constructor(props) {
    super(props)
    this.nextEntry = this.nextEntry.bind(this)
    this.copyEntryText = this.copyEntryText.bind(this)
  }

  nextEntry() {
    this.props.dispatch(entry.next()) 
  }

  copyEntryText() {
    let inp = this.refs.cpEntryText
    inp.select()
    document.execCommand('copy')
    inp.blur()
  }

  render() {
    let entry = this.props.entry;
    if (!entry) {
      return <div className="column"><h1>Loading stoic quotes</h1></div>
    }
    return <div className="column main-app">
             <Entry entry={entry} key={entry.id} />
             <div className="btn-wrapper">
               <button className="random-btn ctrl-btn" onClick={this.nextEntry}>next</button>
               <button className="copy-btn ctrl-btn" onClick={this.copyEntryText}>copy</button>
             </div>
             <input className="cpEntryText" type="text" value={entry.text} ref="cpEntryText" readOnly />
           </div>
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
}

function mapStateToProps(state) {
  return {
    entry: state.entries.current
  }
}

export const AppConnect = connect(mapStateToProps)(App);
