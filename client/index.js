require('../scss/main.scss');

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './containers/Root';
import configureStore from './store/configureStore'

import { entries } from './actions';

import fetch from 'isomorphic-fetch';

let store = configureStore();
store.dispatch(entries.fetch()).then(() => {
  let rootElement = document.getElementById('root')
  render(
    <Root store={store}></Root>,
    rootElement
  )
})

