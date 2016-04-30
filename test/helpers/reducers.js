import { combineReducers } from 'redux';
const initialState = {
  entries: { hidden: [], rendered: [], current: {} },
  entryFetchCounter: { start: 0, limit: 30}
}

function interceptReceivedEntries(spyOnMethods) {
  let eSpy = arguments[0]
  return (state = initialState.entries, action) => {
    switch(action.type) {
      case 'RECEIVED_ENTRIES':
        return {}
      case 'REHYDRATE_ENTRIES':
        return []
      case 'MOVE_CURRENT_ENTRY':
        spyOnMethods(eSpy)
        return []
      case 'SET_CURRENT_ENTRY':
        spyOnMethods(eSpy)
        return []
      default:
        return state;
    }
  };
}
function interceptNextEntry(spyOnMethods) {
  let eSpy = arguments[0]
  return (state = initialState.entries, action) => {
    switch(action.type) {
      case 'RECEIVED_ENTRIES':
        return {
          hidden: [...state.hidden],
          rendered: state.rendered,
          current: state.current
        }
      case 'REHYDRATE_ENTRIES':
        return []
      case 'MOVE_CURRENT_ENTRY':
        spyOnMethods(eSpy)
        return {
          hidden: state.hidden.filter(entry => entry.id !== action.entry.id),
          rendered: [...state.rendered, action.entry],
          current: state.current
        }
      case 'SET_CURRENT_ENTRY':
        spyOnMethods(eSpy)
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

export function handleReceivedEntries(entriesSpy) {
  return combineReducers({ 
    entries: interceptReceivedEntries(entriesSpy),
    entryFetchCounter })
}

export function handleNextEntry(entriesSpy) {
  return combineReducers({ 
    entries: interceptNextEntry(entriesSpy),
    entryFetchCounter })
}
