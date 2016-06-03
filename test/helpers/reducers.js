import { combineReducers } from 'redux';
import { 
  INCREASE_OFFSET_LIMIT,
  REHYDRATE_ENTRIES,
  RECEIVED_ENTRIES,
  SET_CURRENT_ENTRY,
  MOVE_CURRENT_ENTRY,
} from '../../client/constants/ActionTypes'
const initialState = {
  entries: { hidden: [], rendered: [], current: {} },
  entryFetchCounter: { start: 0, limit: 30}
}

function intercept(spy) {
  return (state = initialState.entries, action) => {
    switch(action.type) {
      case RECEIVED_ENTRIES:
        spy.entries.received()
        return {
          hidden: [...state.hidden],
          rendered: state.rendered,
          current: state.current
        }
      case REHYDRATE_ENTRIES:
        spy.rehydrateEntries()
        return {
          hidden: [...state.hidden, ...state.rendered],
          rendered: [...state.hidden],
          current: state.current
        }
      case MOVE_CURRENT_ENTRY:
        spy.entry.current.move()
        return {
          hidden: state.hidden.filter(entry => entry.id !== action.entry.id),
          rendered: [...state.rendered, action.entry],
          current: state.current
        }
      case SET_CURRENT_ENTRY:
        spy.entry.current.set()
        let current = action.entries.hidden[Math.floor(Math.random() * (action.entries.hidden.length - 1))]
        return {
          hidden: [...action.entries.hidden],
          rendered: [...action.entries.rendered],
          current: Object.assign({}, current)
        }
      default:
        return state;
    }
  };
}

function interceptCounter(spy) {
  return (state = initialState.entryFetchCounter, action) => {
    switch(action.type) {
      case INCREASE_OFFSET_LIMIT:
        spy.increaseOffsetLimit()
        return {
          start: action.entryFetchCounter.start + action.entryFetchCounter.limit,
          limit: state.limit
        }
      default:
        return state
    }
  }
}

export function handleEntries(spies) {
  return combineReducers({ 
    entries: intercept(spies.entries),
    entryFetchCounter: interceptCounter(spies.counter)})
}
