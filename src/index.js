import 'milligram/dist/milligram.css';
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import reducers from './reducers/reducer';
import { addFavorite, deleteFavorite } from './actions/quotes.js';

import App from './containers/App';

let store = createStore(reducers);

render(
  <App />,
  document.getElementById('root')
);
