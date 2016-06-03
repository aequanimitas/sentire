import expect from 'expect';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { entry as middlewareEntry } from '../../client/middleware/entry'
import { handleEntries } from '../helpers/reducers'
import { entries, entry as actionsEntry } from '../../client/actions'

describe('Entry middleware', () => {
  it('should intercept RECEIVED_ENTRIES', () => {
    let spy = {
      entries: {
        received: expect.createSpy(() => {})
      },
      rehydrateEntries: expect.createSpy(() => {}),
      entry: {
        current: {
          set: expect.createSpy(() => {}),
          move: expect.createSpy(() => {})
        }
      }
    }
    let store = applyMiddleware(thunkMiddleware, middlewareEntry)(createStore)(handleEntries({entries: spy}))
      store.dispatch(entries.received(require('../fixtures/epictetus.json'), store.getState()))
      expect(spy.entry.current.set.calls.length).toEqual(1)
      expect(spy.entry.current.move.calls.length).toEqual(1)
  })
  it('should intercept NEXT_ENTRY', () => {
    let spy = {
      entries: {
        received: expect.createSpy(() => {})
      },
      rehydrateEntries: expect.createSpy(() => {}),
      entry: {
        current: {
          set: expect.createSpy(() => {}),
          move: expect.createSpy(() => {})
        },
        next: expect.createSpy(() => {})
      }
    }
    let store = applyMiddleware(thunkMiddleware, middlewareEntry)(createStore)(handleEntries({entries: spy}))
      store.dispatch(entries.received(require('../fixtures/epictetus.json'), store.getState()))
      expect(spy.entry.current.set.calls.length).toEqual(1)
      expect(spy.entry.current.move.calls.length).toEqual(1)
      store.dispatch(actionsEntry.next())
      expect(spy.entry.current.set.calls.length).toEqual(2)
      expect(spy.entry.current.move.calls.length).toEqual(2)
  })
})
