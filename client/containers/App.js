import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../components/Entry';
import * as EntryActions from '../actions/entries';
import * as FavoriteActions from '../actions/favorites';

class App extends Component {
  render() {
    const { actions, entries} = this.props;
    return (<div className="row">
        {entries.map(entry => <Entry entry={entry} key={entry.author.name + entry.book.name + entry.chapter} addFavorite={actions.addFavorite} /> )}
    </div>);
  }
}

function mapStateToProps(state) {
  console.log(state);
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
