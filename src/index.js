import 'milligram/dist/milligram.css';
require('../scss/main.scss');

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './containers/Root.dev';
import configureStore from './store/configureStore'

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { requestQuotes, fetchQuotes } from './actions/quotes';

import fetch from 'isomorphic-fetch';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const tStore = createStoreWithMiddleware(rootReducer);
tStore.dispatch(fetchQuotes()).then(() => {
  console.log('Promise');
  console.log(tStore.getState());
});

let store = configureStore();
let rootElement = document.getElementById('root')

render(
  <Root store={store}></Root>,
  rootElement
);
