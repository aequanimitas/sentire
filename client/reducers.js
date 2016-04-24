import { combineReducers } from 'redux';

const initialState = {
  entries: {
    fetched: [],
    rendered: []
  },
  entryCount: {
    startEntry: 0,
    endEntry: 30
  }
}

const ENTRY_INCREMENTS = 32

function entryCount(state = initialState.entryCount, action) {
  switch(action.type) {
    case 'INCREASE_OFFSET_LIMIT':
      return {
        startEntry: action.entryCount.startEntry + ENTRY_INCREMENTS,
        endEntry: action.entryCount.endEntry + ENTRY_INCREMENTS
      }
    default:
      return state
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
      return {
        fetched: [...state.fetched, ...action.entries.fetched],
        rendered: []
      }
    case 'GET_ENTRY':
      return {
        fetched: state.fetched.slice(1),
        rendered: [state.fetched[0], ...state.rendered]
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entries,
  entryCount
});

export default rootReducer;
