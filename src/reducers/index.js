import { combineReducers } from 'redux';
const initialState = {
  favorite: [],
  quote: {}
}

function favorite(state = initialState, action) {
  switch(action.type) {
    case 'ADD_FAVORITE':
      if (state.favorite.indexOf(action.id) > -1) {
        return state;
      } else {
        return [ ...state, action.id ];
      }
    case 'DELETE_FAVORITE':
      return state.favorite.filter(quote => quote !== action.id);
    default:
      return state;
  }
}

function quote(state = initialState.quote, action) {
  switch(action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorite,
  quote
});

export default rootReducer;
