import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import lodash from 'lodash'

class App extends Component {
  render() {
    let { entries } = this.props
    let columnedEntries = lodash.chunk(entries, 3)
    console.log(columnedEntries);
    return <div>
      {columnedEntries.map(colEntries => {
        return <div className="row">
          { colEntries.map(entry => {
            return <Entry entry={entry} key={entry.id} />
          })}
        </div>
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
