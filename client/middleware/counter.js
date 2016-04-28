import { increaseEntryCount } from '../actions';

export function counter({ dispatch, getState }) {
  return (next) =>
    (action) => {
      if(action.type === 'RECEIVED_ENTRIES') {
        dispatch(increaseEntryCount(getState()))
      }
      return next(action)
    };
}
