import fetch from 'isomorphic-fetch';

export function receivedEntries(data) {
  return {
    type: 'RECEIVED_ENTRIES',
    entries: data.data
  }
}

export function requestEntries() {
  return {
    type: 'REQUEST_ENTRIES',
    entries: [],
    receivedAt: Date.now()
  }
}

export function fetchEntries() {
  return function (dispatch) {
    dispatch(requestEntries())
    return fetch('/api/entries')
      .then(data => data.json())
      .then(data => dispatch(receivedEntries(data)))
      .catch(err => {
        console.log(err);
      });
  }
}

export function addFavorite(qid) {
  return { type: 'ADD_FAVORITE', id: qid };
}

export function deleteFavorite(qid) {
  return { type: 'DELETE_FAVORITE', id: qid };
}
