import { combineReducers } from 'redux';
import { 
  INCREASE_OFFSET_LIMIT,
  REHYDRATE_ENTRIES,
  RECEIVED_ENTRIES,
  SET_CURRENT_ENTRY,
  MOVE_RENDERED_ENTRY
} from './constants/ActionTypes'

const initialState = {
  entries: {
    rendered: [],
    hidden: [],
    current: {}
  },
  entryFetchCounter: {
    start: 0,
    limit: 30,
  }
}

function entryFetchCounter(state = initialState.entryFetchCounter, action) {
  switch(action.type) {
    case INCREASE_OFFSET_LIMIT:
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
    case RECEIVED_ENTRIES:
      return {
        hidden: [...state.hidden],
        rendered: state.rendered,
        current: state.current
      }
    case REHYDRATE_ENTRIES:
      return {
        hidden: [...state.hidden, ...state.rendered],
        rendered: [...state.hidden],
        current: state.current
      }
    case 'MOVE_CURRENT_ENTRY':
      return {
        hidden: state.hidden.filter(entry => entry.id !== action.entry.id),
        rendered: [...state.rendered, action.entry],
        current: state.current
      }
   case 'SET_CURRENT_ENTRY':
      let current = action.entries.hidden[Math.floor(Math.random() * (action.entries.hidden.length - 1))]
      return {
        hidden: [...action.entries.hidden],
        rendered: [...action.entries.rendered],
        current: Object.assign({}, current)
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entries,
  entryFetchCounter
})

export default rootReducer
