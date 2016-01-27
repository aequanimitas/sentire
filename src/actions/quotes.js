import fethc from 'isomorphic-fetch';

export function addFavorite(qid) {
  return { type: 'ADD_FAVORITE', id: qid };
}

export function deleteFavorite(qid) {
  return { type: 'DELETE_FAVORITE', id: qid };
}

export function receivedQuotes(data) {
  return {
    type: 'RECEIVED_QUOTES',
    quotes: data
  }
}

export function requestQuotes() {
  return {
    type: 'REQUEST_QUOTES',
    quotes: [],
    receivedAt: Date.now()
  }
}

export function fetchQuotes() {
  return function (dispatch) {
    dispatch(requestQuotes())
    return fetch('http://localhost:10000/api/quotes')
      .then(data => data.json())
      .then(data => dispatch(receivedQuotes(data)))
  }
}
