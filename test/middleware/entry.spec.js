import expect from 'expect';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { entry } from '../../client/middleware/entry'
import { handleEntries } from '../helpers/reducers'
import { receivedEntries, nextEntry } from '../../client/actions'

describe('Entry middleware', () => {
  it('should intercept RECEIVED_ENTRIES', () => {
    let spy = {
      moveCurrentEntry: expect.createSpy(() => {}),
      receivedEntries: expect.createSpy(() => {}),
      rehydrateEntries: expect.createSpy(() => {}),
      setCurrentEntry: expect.createSpy(() => {})
    }
    let store = applyMiddleware(thunkMiddleware, entry)(createStore)(handleEntries({entries: spy}))
    store.dispatch(receivedEntries(require('../fixtures/epictetus.json'), store.getState()))
    expect(spy.setCurrentEntry.calls.length).toEqual(1)
    expect(spy.moveCurrentEntry.calls.length).toEqual(1)
  })
  it('should intercept NEXT_ENTRY', () => {
    let spy = {
      moveCurrentEntry: expect.createSpy(() => {}),
      receivedEntries: expect.createSpy(() => {}),
      rehydrateEntries: expect.createSpy(() => {}),
      setCurrentEntry: expect.createSpy(() => {})
    }
    let store = applyMiddleware(thunkMiddleware, entry)(createStore)(handleEntries({entries: spy}))
    store.dispatch(receivedEntries(require('../fixtures/epictetus.json'), store.getState()))
    expect(spy.setCurrentEntry.calls.length).toEqual(1)
    expect(spy.moveCurrentEntry.calls.length).toEqual(1)
    store.dispatch(nextEntry())
    expect(spy.setCurrentEntry.calls.length).toEqual(2)
    expect(spy.moveCurrentEntry.calls.length).toEqual(2)
  })
})
