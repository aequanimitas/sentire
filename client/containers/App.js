import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import * as EntryActions from '../actions/entries';
import * as FavoriteActions from '../actions/favorites';

class App extends Component {
  regroup(groupBy) {
    let group = [];
    for (var i = 0; i <= this.props.entries.length; i += groupBy) {
      group.push(this.props.entries.slice(i, groupBy + i));
    }
    return group;
  }
  render() {
    const { actions, entries} = this.props;
    return (<div className="row entry-row">
      {this.regroup(4).map((group,i) => <div className="column" key={i}> 
        {group.map(entry => {
            let eKey = entry.author.name + entry.book.name + entry.chapter_id + entry.id
            return <Entry entry={entry} 
                   key={eKey}
                   addFavorite={actions.addFavorite} /> 
           }
        )}     
      </div>)};
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FavoriteActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
