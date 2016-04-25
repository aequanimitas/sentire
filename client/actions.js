import fetch from 'isomorphic-fetch';
import { 
  INCREASE_OFFSET_LIMIT,
  REHYDRATE_ENTRIES,
  RECEIVED_ENTRIES,
  SET_CURRENT_ENTRY,
  SET_RENDERED_ENTRY,
  MOVE_RENDERED_ENTRY,
} from './constants/ActionTypes'

let DRAINED_DB = false;

export const increaseEntryCount = state =>
  ({ type: INCREASE_OFFSET_LIMIT, entryFetchCounter: state.entryFetchCounter })

export const moveRenderedEntry = state =>
  ({ type: MOVE_RENDERED_ENTRY, entries: state.entries })

export const receivedEntries = (data, state) =>
  ({ type: RECEIVED_ENTRIES,
    entries: {
      hidden: data.data,
      rendered: state.entries.rendered,
      current: state.entries.current
    }
  })

export const requestEntries = state =>
  ({ type: 'REQUEST_ENTRIES', entries: state.entries, receivedAt: Date.now() })

export const setRenderedEntry = entry => 
  ({ type: SET_RENDERED_ENTRY, entry: entry })

export const rehydrateHiddenEntries = state =>
  ({ type: REHYDRATE_ENTRIES,
     entries: {
       hidden: state.entries.hidden,
       rendered: state.entries.rendered
    }
  })

export const setCurrentEntry = state =>
  ({
    type: SET_CURRENT_ENTRY,
    entries: {
      hidden: state.entries.hidden,
      rendered: state.entries.rendered,
      current: {}
    }
  })

export function fetchEntries() {
  return function (dispatch, getState) {
    let entryCount = getState().entryFetchCounter;
    if (DRAINED_DB) {
      dispatch(rehydrateHiddenEntries(getState()))
    } else {
      dispatch(requestEntries(getState()))
      return fetch('/api/entries?startEntry='+entryCount.start+'&entryFetchLimit='+entryCount.limit)
      .then(data => data.json())
      .then((data) => {
        if (data.data.length === 0) {
          EMPTY_DB = true;
          dispatch(rehydrateHiddenEntries(getState()))
        } else {
          dispatch(receivedEntries(data, getState()))
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
