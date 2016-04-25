import { increaseEntryCount } from '../actions';

export const counter = store => next => action => {
  let result = next(action)
  if(action.type === 'RECEIVED_ENTRIES') {
    result = next(increaseEntryCount(store.getState()))
  }
  return result;
}
