import { RECEIVED_ENTRIES, SET_CURRENT_ENTRY } from '../constants/ActionTypes'
import { setCurrentEntry, moveRenderedEntry } from '../actions'

export const currentEntry = store => next => action => {
  let result = next(action)
  if(action.type === RECEIVED_ENTRIES) {
    result = next(setCurrentEntry(store.getState()))
  }
  return result;
}

export const moveEntry = store => next => action => {
  let result = next(action)
  if(result.type === SET_CURRENT_ENTRY) {
    result = next(moveRenderedEntry(store.getState()))
  }
  return result;
}
