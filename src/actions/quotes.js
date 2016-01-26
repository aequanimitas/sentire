export function addFavorite(qid) {
  return { type: 'ADD_FAVORITE', id: qid };
}

export function deleteFavorite(qid) {
  return { type: 'DELETE_FAVORITE', id: qid };
}

export function receiveQuotes(json) {
  return {
    TYPE: 'RECEIVE_QUOTES',
    QUOTES: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function requestQuotes(json) {
  return {
    TYPE: 'REQUEST_QUOTES',
    QUOTES: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
