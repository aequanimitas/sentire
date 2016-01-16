import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;

if (__ISDEV__) {
  createStore = compose (
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}


export function renderDevTools(store) {
  if(__ISDEV__) {
    let { DevTools } = 'redux-devtools';
    let { LogMonitor } = 'redux-devtools-log-monitor';
    let { DebugPanel } = 'react';
    return (
      <DebugPane top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPane>
    )
  }
  return null;
}
