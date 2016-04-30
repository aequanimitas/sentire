import expect from 'expect';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { counter } from '../../client/middleware/counter'
import { handleEntries } from '../helpers/reducers'
import { receivedEntries, nextEntry } from '../../client/actions'

describe('Counter middleware', () => {
  it('should intercept RECEIVED_ENTRIES', () => {
    let entriesSpy = {
      moveCurrentEntry: expect.createSpy(() => {}),
      receivedEntries: expect.createSpy(() => {}),
      rehydrateEntries: expect.createSpy(() => {}),
      setCurrentEntry: expect.createSpy(() => {})
    }
    let counterSpy = {
      increaseOffsetLimit: expect.createSpy(() => {})
    }
    let store = applyMiddleware(thunkMiddleware, counter)(createStore)(handleEntries({
      entries: entriesSpy, counter: counterSpy
    }))
    store.dispatch(receivedEntries(require('../fixtures/epictetus.json'), store.getState()))
    expect(counterSpy.increaseOffsetLimit.calls.length).toEqual(1)
  })
})
