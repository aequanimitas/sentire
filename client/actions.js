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

export const entry = {
  next: () => ({ type: 'NEXT_ENTRY' }),
  current: {
    move: (payload) => ({
      type: MOVE_CURRENT_ENTRY,
      entry: payload.entries.current
    }),
    set: (payload) => ({
      type: SET_CURRENT_ENTRY,
      entries: payload.entries
    })
  },
  increaseCount: (payload) => ({
    type: INCREASE_OFFSET_LIMIT,
    entryFetchCounter: payload.entryFetchCounter
  })
}

export const entries = {
  request: (state) => ({
    type: REQUEST_ENTRIES,
    entries: state.entries,
    entryFetchCounter: state.entryFetchCounter,
    receivedAt: Date.now()
  }),
  fetch: () => {
    return function(dispatch, getState) {
      if (DRAINED_DB) {
        return dispatch(entries.rehydrate(getState()))
      } else {
        let qryParams = getState().entryFetchCounter
          dispatch(entries.request(getState()))
          return fetch('/api/entries?startEntry='+qryParams.start+'&entryFetchLimit='+qryParams.limit)
          .then(data => data.json())
          .then((data) => {
            if (data.data.length === 0) {
              DRAINED_DB = true;
              dispatch(entries.rehydrate(getState()))
            } else {
              dispatch(entries.received(data, getState()))
            }
          })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  },
  received: (data, state) => ({
    type: RECEIVED_ENTRIES,
    entries: {
      hidden: data.data,
      rendered: state.entries.rendered,
      current: state.entries.current
    },
    entryFetchCounter: state.entryFetchCounter
  }),
  rehydrate: (state) => ({
    type: REHYDRATE_ENTRIES,
    entries: {
      hidden: state.entries.hidden,
      rendered: state.entries.rendered
    }
  })
}
