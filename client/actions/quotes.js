import fetch from 'isomorphic-fetch';

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
    return fetch('/api/quotes')
      .then(data => data.json())
      .then(data => dispatch(receivedQuotes(data)))
  }
}
