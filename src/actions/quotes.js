export function addFavorite(qid) {
  return { type: 'ADD_FAVORITE', qid };
}

export function deleteFavorite(qid) {
  return { type: 'DELETE_FAVORITE', qid };
}
