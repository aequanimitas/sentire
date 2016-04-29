import expect from 'expect';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { entry } from '../../client/middleware/entry'
import rootReducer from '../helpers/reducers'
import { receivedEntries } from '../../client/actions'

describe('Entry middleware', () => {
  it('should intercept RECEIVED_ENTRIES', () => {
    let spy = expect.createSpy(() => {})
    let store = applyMiddleware(thunkMiddleware, entry)(createStore)(rootReducer(spy))
    store.dispatch(receivedEntries(require('../fixtures/epictetus.json'), store.getState()))
    expect(spy.calls.length).toEqual(1)
  })
})
