import 'milligram/dist/milligram.css';
require('../scss/main.scss');

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducer';

import App from './containers/App';

let store = createStore(reducers);
let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);
