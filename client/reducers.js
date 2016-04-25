import { combineReducers } from 'redux';

const initialState = {
  entries: {
    rendered: [],
    hidden: []
  },
  entryFetchCounter: {
    start: 0,
    limit: 30,
  }
}

function entryFetchCounter(state = initialState.entryFetchCounter, action) {
  switch(action.type) {
    case 'INCREASE_OFFSET_LIMIT':
      return {
        start: action.entryFetchCounter.start + action.entryFetchCounter.limit,
        limit: state.limit
      }
    default:
      return state
  }
}

function entries(state = initialState.entries, action) {
  switch(action.type) {
    case 'RECEIVED_ENTRIES':
      return {
        hidden: [...state.hidden, ...action.entries.hidden],
        rendered: state.rendered
      }
    case 'REHYDRATE_ENTRIES':
      return {
        hidden: [...state.hidden, ...state.rendered],
        rendered: [...state.hidden]
      }
    case 'ENTRY_RENDERED':
      return {
        hidden: state.hidden.filter(entry => entry.id !== action.entry.id),
        rendered: [...state.rendered, action.entry]
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entries,
  entryFetchCounter
});

export default rootReducer;
