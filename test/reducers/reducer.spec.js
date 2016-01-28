import expect from 'expect';
import reducer from '../../src/reducers';

describe('Reducers', () => {
  describe('Favorites', () => {
    it('should return initial state if state is undefined', () => {
      expect(reducer(undefined, {})).toEqual({
          favorites: [],
          quotes: [],
          user: { id: undefined, role: 'anonymous' }
      });
    });

    it('should return a new array on ADD_FAVORITE', () => {
      let fv = ['enchiridion_8'];
      expect(reducer({favorites: fv, quotes: []}, {
        type: 'ADD_FAVORITE',
        id: 'enchiridion_1'
      })).toEqual({
        favorites: ['enchiridion_8', 'enchiridion_1'],
        quotes: [],
        user: { id: undefined, role: 'anonymous' }
      });
    });

    it('should return no duplicates, which can be resolved by using immutable.js', () => {
      let fv = ['enchiridion_8'];
      expect(reducer({favorites: fv, quotes: []}, {
        type: 'ADD_FAVORITE',
        id: 'enchiridion_8'
      })).toEqual({
        favorites: ['enchiridion_8'],
        quotes: [],
        user: { id: undefined, role: 'anonymous' }
      });
    });

    it('should remove id from favorites on DELETE_FAVORITE', () => {
      let fv = ['enchiridion_8', 'enchiridion_1'];
      expect(reducer({favorites: fv, quotes: []}, {
        type: 'DELETE_FAVORITE',
        id: 'enchiridion_8'
      })).toEqual({
        favorites: ['enchiridion_1'],
        quotes: [],
        user: { id: undefined, role: 'anonymous' }
      });
    });
  });

  describe('User', () => {
    it('favorites should be empty if id is undefined', () => {
      expect(reducer(undefined, {})).toEqual({
          favorites: [],
          quotes: [],
          user: { id: undefined, role: 'anonymous' }
      });
    });

    it('should have a role anonymous if no ID is present', () => {
      expect(reducer(undefined, {})).toEqual({
          favorites: [],
          quotes: [],
          user: { id: undefined, role: 'anonymous' }
      });
    });
  });
});
