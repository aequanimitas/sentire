import expect from 'expect';
import reducer from '../../client/reducers';

describe('Reducers', () => {
  describe('entries', () => {
    it('default should return an object with keys fetched, entryCount and rendered', () => {
      expect(reducer(undefined, {})).toEqual({
        entries: { fetched: [], rendered: [] },
        entryCount: { endEntry: 30, startEntry: 0 }
      })
    })
  })
});
