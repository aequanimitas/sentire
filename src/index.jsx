import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Quote from './components/Quote';
import {Map, List} from 'immutable';

const routes = <Route component={App}>
  <Route path="/" component={Quote} />
</Route>

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('react-container')
);
