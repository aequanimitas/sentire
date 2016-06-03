import { entry as actionsEntry, fetchEntries } from '../actions';
import { 
  NEXT_ENTRY,
  RECEIVED_ENTRIES
} from '../constants/ActionTypes'

export function entry({ dispatch, getState }) {
  return (next) =>
    (action) => {
      if(action.type === RECEIVED_ENTRIES) {
        dispatch(actionsEntry.current.set(action))
        dispatch(actionsEntry.current.move(getState()))
      }
      if (action.type === NEXT_ENTRY) {
        if (getState().entries.hidden.length === 0) {
          dispatch(fetchEntries())
        } else {
          dispatch(actionsEntry.current.set(getState()))
          dispatch(actionsEntry.current.move(getState()))
        }
      }
      return next(action)
    };
}
