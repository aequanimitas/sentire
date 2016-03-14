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
    let fave = meta.props.children[1].props.children[0];
    let author = meta.props.children[0].props.children[1];
    let book = meta.props.children[0].props.children[2];
    expect(fave.key).toEqual('entry1');
    expect(author.type).toBe('span');
    expect(book.type).toBe('span');
  });

  it('should just call addFavorite', () => {
    let { output, props } = setup()
    let [ text, meta ] = output.props.children;
    let fave = meta.props.children[1].props.children[0];
    fave.props.onClick();
    expect(props.addFavorite.calls.length).toBe(1);
    expect(props.addFavorite).toHaveBeenCalledWith('favorite_1');
  });

  it('should change text from "More" to "Less"', () => {
    let { output, props } = setup()
    let more = output.props.children[1].props.children[1].props.children[1]
    more.simulate('click');
    console.log(more);
  });
});
