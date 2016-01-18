import 'milligram/dist/milligram.css';
require('../scss/main.scss');

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './containers/Root.dev';
import configureStore from './store/configureStore'

let store = configureStore();
let rootElement = document.getElementById('root')

render(
  <Root store={store}></Root>,
  rootElement
);
