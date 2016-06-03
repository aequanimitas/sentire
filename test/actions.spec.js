import expect from 'expect'
import { entry, entries } from '../client/actions'
import { 
  INCREASE_OFFSET_LIMIT,
  REHYDRATE_ENTRIES,
  RECEIVED_ENTRIES,
  REQUEST_ENTRIES,
  SET_CURRENT_ENTRY,
  MOVE_CURRENT_ENTRY,
} from '../client/constants/ActionTypes'

describe('Actions', () => {
  describe('entry', () => {
    describe('current', () => {
      it('set should return action type SET_CURRENT_ENTRY with payload', () => {
        expect(entry.current.set({
          entries: { hidden: [], rendered: [], current: {} }
        })).toEqual({
          type: SET_CURRENT_ENTRY,
          entries: { hidden: [], rendered: [], current: {} }
        })
      })
      it('increase should return action type INCREASE_OFFSET_LIMIT', () => {
        expect(entry.increaseCount({
          entryFetchCounter: { limit: 30, start: 0 }  
        })).toEqual({
          type: INCREASE_OFFSET_LIMIT,
          entryFetchCounter: { limit: 30, start: 0 }  
        })
      })
    })
  })
  describe('entries', () => {
    it('received', () => {
      expect(entries.received({ data: ['data'] }, {
        entries: {
          hidden: [],
          rendered: [],
          current: []
        },
        entryFetchCounter: { limit: 30, start: 0 }  
      })).toEqual({
        type: RECEIVED_ENTRIES,
        entries: {
          hidden: ['data'],
          rendered: [],
          current: []
        },
        entryFetchCounter: { limit: 30, start: 0 }  
      })
    })
  })
})
