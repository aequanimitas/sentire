import {expect} from 'chai';
import epictetusFixture from './fixtures/epictetus.json';
import reducer from '../src/reducer'

describe('Quote Reducer', () => {
  it('should handle LOAD_QUOTES', () => {
    const initState = {};
    const step = {
      type: 'LOAD_QUOTES',
      state: epictetusFixture
    };
    const reshape = reducer(initState, step);
    expect(reshape[0]).to.equal(step.state[0]);
    expect(reshape[0].tags.length).to.equal(step.state[0].tags.length);
  });
});
