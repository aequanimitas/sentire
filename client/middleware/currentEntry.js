import { 
  RECEIVED_ENTRIES, 
  SET_CURRENT_ENTRY,
  MOVE_RENDERED_ENTRY 
} from '../constants/ActionTypes'
import { 
  setCurrentEntry, 
  moveRenderedEntry,
  fetchEntries
} from '../actions'

export const currentEntry = store => next => action => {
  if (action.type === SET_CURRENT_ENTRY && action.entries.hidden.length === 0) {
    return store.dispatch(fetchEntries())
  } else {
    let result = next(action)
    if(action.type === RECEIVED_ENTRIES) {
      return next(setCurrentEntry(store.getState()))
    } else {
      return next(action)
    }
  }
}

export const moveEntry = store => next => action => {
  let result = next(action)
  if(result.type === SET_CURRENT_ENTRY) {
    result = next(moveRenderedEntry(store.getState()))
  }
  return result;
}
