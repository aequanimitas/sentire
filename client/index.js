import 'milligram/dist/milligram.css';
require('../scss/main.scss');

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './containers/Root.dev';
import configureStore from './store/configureStore'

import { requestEntries, fetchEntries } from './actions/entries';

import fetch from 'isomorphic-fetch';

let store = configureStore();
store.dispatch(fetchEntries());
let rootElement = document.getElementById('root')

render(
  <Root store={store}></Root>,
  rootElement
);
