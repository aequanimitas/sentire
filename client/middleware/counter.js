import { entry } from '../actions';
import { RECEIVED_ENTRIES } from '../constants/ActionTypes'

export function counter({ dispatch, getState }) {
  return (next) =>
    (action) => {
      if(action.type === RECEIVED_ENTRIES) {
        dispatch(entry.increaseCount(getState()))
      }
      return next(action)
    };
}
