import 'milligram/dist/milligram.css';
require('../scss/main.scss');

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './containers/Root.dev';
import configureStore from './store/configureStore'

import { requestQuotes, fetchQuotes } from './actions/quotes';

import fetch from 'isomorphic-fetch';

let store = configureStore();
store.dispatch(fetchQuotes());
let rootElement = document.getElementById('root')

render(
  <Root store={store}></Root>,
  rootElement
);
