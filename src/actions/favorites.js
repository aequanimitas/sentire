export function addFavorite(qid) {
  return { type: 'ADD_FAVORITE', id: qid };
}

export function deleteFavorite(qid) {
  return { type: 'DELETE_FAVORITE', id: qid };
}
