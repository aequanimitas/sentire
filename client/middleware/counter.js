import { increaseEntryCount } from '../actions';
import { RECEIVED_ENTRIES } from '../constants/ActionTypes'

export const counter = store => next => action => {
  let result = next(action)
  if(action.type === RECEIVED_ENTRIES) {
    result = next(increaseEntryCount(store.getState()))
  }
  return result;
}
