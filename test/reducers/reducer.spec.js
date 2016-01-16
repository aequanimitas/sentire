import expect from 'expect';
import reducer from '../../src/reducers/reducer';

describe('Quotes reducer', () => {
  it('should return initial state if state is undefined', () => {
    expect(reducer(undefined, {})).toEqual(['enchiridion_8']);
  });

  it('should return a new array on ADD_FAVORITE', () => {
    expect(reducer(undefined, {
      type: 'ADD_FAVORITE',
      id: 'enchiridion_1'
    })).toEqual(['enchiridion_8', 'enchiridion_1']);
  });

  it('should remove id from favorites on DELETE_FAVORITE', () => {
    expect(reducer(['enchiridion_8', 'enchiridion_1'], {
      type: 'DELETE_FAVORITE',
      id: 'enchiridion_8'
    })).toEqual(['enchiridion_1']);
  });

});
