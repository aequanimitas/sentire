import {Map} from 'immutable';

export function search(state, queryStr, key) {
  return key === 'tags' ?
    state.filter(x => x.get('tags').contains(queryStr)) :
    state.filter(x => x.get(key) === queryStr);
}
