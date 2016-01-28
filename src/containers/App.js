import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Quote from '../components/Quote';
import * as QuoteActions from '../actions/quotes';
import * as FavoriteActions from '../actions/favorites';

class App extends Component {
  render() {
    const { actions, quotes} = this.props;
    return (<div className="row">
        {quotes.map(qt => <Quote quote={qt} key={qt.book + qt.chapter} addFavorite={actions.addFavorite} /> )}
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FavoriteActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
