import fetch from 'isomorphic-fetch';

export function increaseEntryCount(state) {
  return {
    type: 'INCREASE_OFFSET_LIMIT',
    entryCount: state.entryCount
  }
}

export function receivedEntries(data) {
  return {
    type: 'RECEIVED_ENTRIES',
    entries: {
      fetched: data.data
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
      .then(data => dispatch(receivedEntries(data)))
      .then(() => { dispatch(increaseEntryCount(getState())) })
      .catch(err => {
        console.log(err);
      });
  }
}
