import expect from 'expect';
import { createStore, applyMiddleware } from 'redux'
import { entry } from '../../client/middleware/entry'
import { wrapReducer } from '../helpers/reducers'

describe('Entry middleware', () => {
  it('should intercept RECEIVED_ENTRIES', () => {
    let spy = expect.createSpy(() => {})
    let store = applyMiddleware(entry)(createStore)(wrapReducer(spy))
    store.dispatch({type: 'RECEIVED_ENTRIES'})
    expect(spy.calls.length).toEqual(2)
  })
})
