import fetch from 'isomorphic-fetch';

let DRAINED_DB = false;

export function increaseEntryCount(state) {
  return {
    type: 'INCREASE_OFFSET_LIMIT',
    entryFetchCounter: state.entryFetchCounter
  }
}

export function receivedEntries(data, state) {
  return {
    type: 'RECEIVED_ENTRIES',
    entries: {
      hidden: data.data,
      rendered: state.entries.rendered
    }
  }
}

export function requestEntries(state) {
  return {
    type: 'REQUEST_ENTRIES',
    entries: state.entries,
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
    let entryCount = getState().entryFetchCounter;
    if (DRAINED_DB) {
      dispatch(rehydrateHiddenEntries(getState()))
    } else {
      dispatch(requestEntries(getState()))
      return fetch('/api/entries?startEntry='+entryCount.start+'&entryFetchLimit='+entryCount.limit)
      .then(data => data.json())
      .then((data) => {
        if (data.data.length === 0) {
          EMPTY_DB = true;
          dispatch(rehydrateHiddenEntries(getState()))
        } else {
          dispatch(receivedEntries(data, getState()))
        }
      })
      .then(() => { dispatch(increaseEntryCount(getState())) })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
