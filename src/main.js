import {Map} from 'immutable';

export function search(state, queryStr, key) {
  var qry = queryStr.split(' ').join('').toLowerCase();
  return state.filter(x => x.get('author') === qry);
}
