import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils'
import Quote from '../../src/components/Quote';

function setup() {
  let props = {
    quote: require('../fixtures/epictetus.json')[0],
    addFavorite: expect.createSpy()
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Quote {...props} />);
  let output = renderer.getRenderOutput();
  return { output, props, renderer }
}

describe('Quote Component', () => {
  it('should render', () => {
    let { output } = setup()
    let [button, p, span, ul] = output.props.children;
    expect(button.type).toBe('button');
    expect(button.key).toEqual('enchiridion_3');
    expect(p.type).toBe('p');
    expect(span.type).toBe('span');
    expect(ul.type).toBe('ul');
  });

  it('should just call addFavorite', () => {
    let { output, props } = setup()
    let button = output.props.children[0];
    button.props.onClick();
    expect(props.addFavorite.calls.length).toBe(1);
    expect(props.addFavorite).toHaveBeenCalledWith('enchiridion_3');
  });

});
