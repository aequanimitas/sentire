import expect from 'expect';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { entry } from '../../client/middleware/entry'
import { wrapReducer } from '../helpers/reducers'

describe('Entry middleware', () => {
  it('should intercept RECEIVED_ENTRIES', () => {
    let spy = expect.createSpy(() => {})
    let store = applyMiddleware(thunkMiddleware, entry)(createStore)(wrapReducer(spy))
    function receivedEntries(data, state) {
      return { type: 'RECEIVED_ENTRIES',
        entries: {
          hidden: data.data,
          rendered: state.entries.rendered,
          current: state.entries.current
        },
        entryFetchCounter: state.entryFetchCounter
      }
    }
    store.dispatch(
      receivedEntries(
        {data: [[],[],[]]}, {entries: {hidden: [], rendered:[], current:[]}, 
        entryFetchCounter: {start: 0, limt: 30}}))
    expect(spy.calls.length).toEqual(1)
  })
})
