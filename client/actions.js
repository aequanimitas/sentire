import fetch from 'isomorphic-fetch';
import { 
  INCREASE_OFFSET_LIMIT,
  REHYDRATE_ENTRIES,
  RECEIVED_ENTRIES,
  REQUEST_ENTRIES,
  SET_CURRENT_ENTRY,
  MOVE_CURRENT_ENTRY,
} from './constants/ActionTypes'

let DRAINED_DB = false;

export const increaseEntryCount = (payload) => ({
  type: INCREASE_OFFSET_LIMIT,
  entryFetchCounter: payload.entryFetchCounter
})

export const setCurrentEntry = (payload) => ({
  type: SET_CURRENT_ENTRY,
  entries: payload.entries
})

export const moveCurrentEntry = (payload) => ({
  type: MOVE_CURRENT_ENTRY,
  entry: payload.entries.current
})

export const moveRenderedEntry = state =>
  ({ type: MOVE_RENDERED_ENTRY, entries: state.entries })

export const receivedEntries = (data, state) =>
  ({ type: RECEIVED_ENTRIES,
    entries: {
      hidden: data.data,
      rendered: state.entries.rendered,
      current: state.entries.current
    },
    entryFetchCounter: state.entryFetchCounter
  })

export function requestEntries(state) {
  return {
    type: REQUEST_ENTRIES,
    entries: state.entries,
    entryFetchCounter: state.entryFetchCounter,
    receivedAt: Date.now()
  }
}

export const nextEntry = () => ({ type: 'NEXT_ENTRY' })

export const rehydrateHiddenEntries = state =>
  ({ type: REHYDRATE_ENTRIES,
     entries: {
       hidden: state.entries.hidden,
       rendered: state.entries.rendered
    }
  })

export function fetchEntries() {
  return function (dispatch, getState) {
    if (DRAINED_DB) {
      return dispatch(rehydrateHiddenEntries(getState()))
    } else {
      let qryParams = getState().entryFetchCounter
      dispatch(requestEntries(getState()))
      return fetch('/api/entries?startEntry='+qryParams.start+'&entryFetchLimit='+qryParams.limit)
      .then(data => data.json())
      .then((data) => {
        if (data.data.length === 0) {
          DRAINED_DB = true;
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
