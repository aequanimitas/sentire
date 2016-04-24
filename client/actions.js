import fetch from 'isomorphic-fetch';

export function increaseEntryCount(state) {
  return {
    type: 'INCREASE_OFFSET_LIMIT',
    entryCount: state.entryCount
  }
}

export function receivedEntries(data, state) {
  return {
    type: 'RECEIVED_ENTRIES',
    entries: {
      fetched: data.data,
      rendered: state.entries.rendered
    }
  }
}

export function renderSingleEntry(entries) {
  return {
    type: 'GET_ENTRY',
    entries: {
      fetched: entries.fetched,
      rendered: entries.rendered
    }
  }
}

export function requestEntries() {
  return {
    type: 'REQUEST_ENTRIES',
    entries: {
      fetched: [],
      rendered: []
    },
    receivedAt: Date.now()
  }
}

export function fetchEntries() {
  return function (dispatch, getState) {
    let entryCount = getState().entryCount;
    dispatch(requestEntries())
    return fetch('/api/entries?startEntry='+entryCount.startEntry+'&endEntry='+entryCount.endEntry)
      .then(data => data.json())
      .then(data => dispatch(receivedEntries(data, getState())))
      .then(data => dispatch(renderSingleEntry(data)))
      .then(() => { dispatch(increaseEntryCount(getState())) })
      .catch(err => {
        console.log(err);
      });
  }
}
