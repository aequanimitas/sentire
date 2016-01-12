import React from 'react';
import { render } from 'react-dom';
import Router, {Route} from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import { Quote, QuoteContainer } from './components/Quote';
import reducer from './reducer';
import {Map, List} from 'immutable';

require('../node_modules/milligram/dist/milligram.css');

const initialState = window.__INITIAL_STATE__;

let store = createStore(reducer, initialState);
let rootElem = document.getElementById('react-container');

const routes = <Route component={App}>
  <Route path="/" component={QuoteContainer}></Route>
</Route>

render(
  <Provider store={store}>
    <QuoteContainer />
  </Provider>,
  rootElem
);
