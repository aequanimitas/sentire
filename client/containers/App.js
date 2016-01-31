import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import * as EntryActions from '../actions/entries';
import * as FavoriteActions from '../actions/favorites';

class App extends Component {
  regroup() {
    let start = 0, end = 3, grp = [];
    grp.push(this.props.entries.slice(start, end));
    grp.push(this.props.entries.slice(end, 5));
    return grp;
  }
  render() {
    const { actions, entries} = this.props;
    const nG = this.regroup();
    return (<div> 
      {this.regroup().map((group,i) => <div className="row entry-row" key={i}> 
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