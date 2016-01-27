import { combineReducers } from 'redux';
const initialState = {
  favorites: [],
  quotes: []
}

function favorites(state = initialState.favorites, action) {
  switch(action.type) {
    case 'ADD_FAVORITE':
      if (state.indexOf(action.id) > -1) {
        return state;
      } else {
        return [ ...state, action.id ];
      }
    case 'DELETE_FAVORITE':
      return state.filter(quote => quote !== action.id);
    default:
      return state;
  }
}

function quotes(state = initialState.quotes, action) {
  switch(action.type) {
    case 'RECEIVED_QUOTES':
      return [...state, ...action.quotes];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorites,
  quotes
});

export default rootReducer;
