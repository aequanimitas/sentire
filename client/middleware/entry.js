import { setCurrentEntry, moveCurrentEntry, fetchEntries } from '../actions';
import { 
  NEXT_ENTRY,
  RECEIVED_ENTRIES
} from '../constants/ActionTypes'

export function entry({ dispatch, getState }) {
  return (next) =>
    (action) => {
      if(action.type === RECEIVED_ENTRIES) {
        dispatch(setCurrentEntry(action))
        dispatch(moveCurrentEntry(getState()))
      }
      if (action.type === NEXT_ENTRY) {
        if (getState().entries.hidden.length === 0) {
          dispatch(fetchEntries())
        } else {
          dispatch(setCurrentEntry(getState()))
          dispatch(moveCurrentEntry(getState()))
        }
      }
      return next(action)
    };
}
