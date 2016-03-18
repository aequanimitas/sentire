import * as actions from '../../client/actions/moreless';
import expect from 'expect';

describe('See more or less actions', () => {
  it('SHOW_MORE should just return', () => {
    const expectedAction = {
      type: 'SHOW_MORE',
      more: false
    };
    expect(actions.showMore(false)).toEqual(expectedAction);
  });

  it('SHOW_LESS should just return', () => {
    const expectedAction = {
      type: 'SHOW_LESS',
      more: false
    };
    expect(actions.showLess(false)).toEqual(expectedAction);
  });
});
