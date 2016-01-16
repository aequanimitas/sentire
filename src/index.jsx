import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import { Quote, QuoteContainer } from './components/Quote';
import reducer from './reducer';
import {Map, List} from 'immutable';

require('../node_modules/milligram/dist/milligram.css');
require('../static/main.css');

const initialState = window.__INITIAL_STATE__;

let store = createStore(reducer, initialState);
let rootElem = document.getElementById('react-container');

import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-i'
               changePositionKey='ctrl-q'>
   <LogMonitor theme='tomorrow'></LogMonitor>
  </DockMonitor>
);

const finalCreateStore = compose(
  // applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer'))/*.default if you use Babel 6+ */
    );
  }
  return store;
}

render(
  <Provider store={configureStore()}>
    <div>
      <QuoteContainer />
      <DevTools />
    </div>
  </Provider>,
  rootElem
);
