import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';

class App extends Component {
  regroup(groupBy) {
    let group = [];
    for (var i = 0; i <= this.props.entries.length; i += groupBy) {
      group.push(this.props.entries.slice(i, groupBy + i));
    }
    return group;
  }
  render() {
    const { entries } = this.props;
    return <div className="row entry-row">
      {this.regroup(4).map((group,i) => <div className="column" key={i}> 
        {group.map(entry => {
            let eKey = entry.author + entry.id + entry.chapter;
            return <Entry entry={entry} 
                   key={eKey} /> 
           }
        )}     
      </div>)}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries
  }
}

export default connect(mapStateToProps)(App);
