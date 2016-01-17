import expect from 'expect';
import * as actions from '../../src/actions/quotes';


describe('Quote actions', () => {
  it('ADD_FAVORITE should just return id', () => {
    let qid = '123456';
    const expectedAction = {
      type: 'ADD_FAVORITE',
      id: qid
    };
    expect(actions.addFavorite(qid)).toEqual(expectedAction);
  });

  it('DELETE_FAVORITE should also just return id', () => {
    let qid = '123456';
    const expectedAction = {
      type: 'DELETE_FAVORITE',
      id: qid
    };
    expect(actions.deleteFavorite(qid)).toEqual(expectedAction);
  });
});
