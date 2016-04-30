import expect from 'expect';
import reducers from '../client/reducers';
import { 
  INCREASE_OFFSET_LIMIT,
  REHYDRATE_ENTRIES,
  RECEIVED_ENTRIES,
  SET_CURRENT_ENTRY,
  MOVE_CURRENT_ENTRY,
} from '../client/constants/ActionTypes'

describe('Reducers', () => {
  describe('entries', () => {
    it('default should return the state shape', () => {
      expect(reducers(undefined, {})).toEqual({
        entries: { hidden: [], rendered: [], current: {} },
        entryFetchCounter: { limit: 30, start: 0 }
      })
    })
  })
  describe('entryFetchCounter', () => {
    it('default', () => {
      expect(reducers(undefined, {})).toEqual({ 
        entries: { hidden: [], rendered: [], current: {} },
        entryFetchCounter: { limit: 30, start: 0 }
      })
    })
    it('INCREASE_OFFSET_LIMIT should update entryFetchCounter', () => {
      expect(reducers(undefined, { 
        type: INCREASE_OFFSET_LIMIT,
        entryFetchCounter: { start: 0, limit: 30 }
      })).toEqual({ 
        entries: { hidden: [], rendered: [], current: {} },
        entryFetchCounter: { limit: 30, start: 30 }
      })
    })
  })
});
