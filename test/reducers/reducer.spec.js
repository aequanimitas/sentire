import expect from 'expect';
import reducer from '../../src/reducers/reducer';

describe('Quotes reducer', () => {
  it('should return initial state if state is undefined', () => {
    expect(reducer(undefined, {})).toEqual({
      favorite: [], quote: {}
    });
  });

  it.skip('should return a new array on ADD_FAVORITE', () => {
    expect(reducer(undefined, {
      type: 'ADD_FAVORITE',
      id: 'enchiridion_1'
    })).toEqual({
      favorite: ['enchiridion_8', 'enchiridion_1'],
      quote: {}
    });
  });

  it.skip('should return no duplicates, which can be resolved by using immutable.js', () => {
    expect(reducer(undefined, {
      type: 'ADD_FAVORITE',
      id: 'enchiridion_8'
    })).toEqual({
      favorite: ['enchiridion_8'],
      quote: {}
    });
  });

  it.skip('should remove id from favorites on DELETE_FAVORITE', () => {
    expect(reducer({
      favorite: ['enchiridion_8', 'enchiridion_1']
    }, {
      type: 'DELETE_FAVORITE',
      id: 'enchiridion_8'
    })).toEqual({
      favorite: ['enchiridion_1'],
      quote: {}
    });
  });

});
