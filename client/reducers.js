import { combineReducers } from 'redux';
const initialState = {
  favorites: [],
  entries: [],
  user: { id: undefined, role: 'anonymous' },
  more: { more: false }
}

function user(state = initialState.user, action) {
  switch (action.type) {
    default:
      return state
  }
}

function moreLess(state = initialState.more, action) {
  if (action.type === 'SHOW_MORE' || action.type === 'SHOW_LESS') {
    return 
  } else {
    return state;
  }
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
      return state.filter(entry => entry !== action.id);
    default:
      return state;
  }
}

function entries(state = initialState.entries, action) {
  switch(action.type) {
    case 'RECEIVED_ENTRIES':
      return [...state, ...action.entries];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  favorites,
  entries
});

export default rootReducer;
