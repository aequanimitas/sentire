import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils'
import Entry from '../../client/components/Entry';

function setup() {
  let props = {
    entry: require('../fixtures/epictetus.json').data[0],
    addFavorite: expect.createSpy()
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<Entry {...props} />);
  let output = renderer.getRenderOutput();
  return { output, props, renderer }
}

describe('Entry Component', () => {
  it('should render', () => {
    let { output } = setup()
    let [ text, meta ]  = output.props.children;
    expect(text.type).toBe('p');
    expect(meta.props.children[3].key).toEqual('entry1');
    expect(meta.props.children[0].type).toBe('span');
    expect(meta.props.children[1].type).toBe('span');
  });

  it('should just call addFavorite', () => {
    let { output, props } = setup()
    let [ text, meta ] = output.props.children;
    meta.props.children[3].props.onClick();
    expect(props.addFavorite.calls.length).toBe(1);
    expect(props.addFavorite).toHaveBeenCalledWith('favorite_1');
  });

  it.skip('should change text from "More" to "Less"', () => {
    let { output, props } = setup()
    let more = output.props.children[output.props.children.length - 2];
  });
});
