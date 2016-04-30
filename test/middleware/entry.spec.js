import expect from 'expect';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { entry } from '../../client/middleware/entry'
import { handleReceivedEntries, handleNextEntry } from '../helpers/reducers'
import { receivedEntries, nextEntry } from '../../client/actions'

describe('Entry middleware', () => {
  it('should intercept RECEIVED_ENTRIES', () => {
    let spy = expect.createSpy(() => {})
    let store = applyMiddleware(thunkMiddleware, entry)(createStore)(handleReceivedEntries(spy))
    store.dispatch(receivedEntries(require('../fixtures/epictetus.json'), store.getState()))
    expect(spy.calls.length).toEqual(2)
  })
  it('should intercept ENTRY_RENDERED', () => {
    let spy = expect.createSpy(() => {})
    let store = applyMiddleware(thunkMiddleware, entry)(createStore)(handleNextEntry(spy))
    store.dispatch(receivedEntries(require('../fixtures/epictetus.json'), store.getState()))
    expect(store.getState().entries.hidden.length).toEqual(9)
    store.dispatch(nextEntry())
    expect(spy.calls.length).toEqual(4)
  })
})
