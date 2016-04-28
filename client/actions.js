import fetch from 'isomorphic-fetch';

let DRAINED_DB = false;

export const increaseEntryCount = (payload) => ({
  type: 'INCREASE_OFFSET_LIMIT',
  entryFetchCounter: payload.entryFetchCounter
})

export const setCurrentEntry = (payload) => ({
  type: 'SET_CURRENT_ENTRY',
  entries: payload.entries
})

export const moveCurrentEntry = (payload) => ({
  type: 'MOVE_CURRENT_ENTRY',
  entry: payload.entries.current
})

export function receivedEntries(data, state) {
  return {
    type: 'RECEIVED_ENTRIES',
    entries: {
      hidden: data.data,
      rendered: state.entries.rendered,
      current: state.entries.current
    },
    entryFetchCounter: state.entryFetchCounter
  }
}

export function requestEntries(state) {
  return {
    type: 'REQUEST_ENTRIES',
    entries: state.entries,
    entryFetchCounter: state.entryFetchCounter,
    receivedAt: Date.now()
  }
}

export function markEntryRendered(entry) {
  return {
    type: 'ENTRY_RENDERED',
    entry: entry
  }
}

export function rehydrateHiddenEntries(state) {
  return {
    type: 'REHYDRATE_ENTRIES',
    entries: {
      hidden: state.entries.hidden,
      rendered: state.entries.rendered
    }
  }
}

export function fetchEntries() {
  return function (dispatch, getState) {
    if (DRAINED_DB) {
      return dispatch(rehydrateHiddenEntries(getState()))
    } else {
      let qryParams = getState().entryFetchCounter
      dispatch(requestEntries(getState()))
      return fetch('/api/entries?startEntry='+qryParams.start+'&entryFetchLimit='+qryParams.limit)
      .then(data => data.json())
      .then((data) => {
        if (data.data.length === 0) {
          DRAINED_DB = true;
          dispatch(rehydrateHiddenEntries(getState()))
        } else {
          dispatch(receivedEntries(data, getState()))
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
