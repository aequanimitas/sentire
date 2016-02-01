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
    let [ text, author, book, seemore, favorite ]  = output.props.children;
    expect(text.type).toBe('p');
    expect(favorite.key).toEqual('enchiridion_3');
    expect(author.type).toBe('span');
    expect(book.type).toBe('span');
  });

  it('should just call addFavorite', () => {
    let { output, props } = setup()
    let favorite = output.props.children[output.props.children.length - 1];
    favorite.props.onClick();
    expect(props.addFavorite.calls.length).toBe(1);
    expect(props.addFavorite).toHaveBeenCalledWith('enchiridion_3');
  });

});
