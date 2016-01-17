import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils'

import App from '../../src/containers/App';
import Quote from '../../src/components/Quote';

describe('App UI', () => {
  describe('quote component', () => {
    let renderer, output;

    it('should just render', () => {
      let props = {
        quote: require('../fixtures/epictetus.json')[0]
      };
      renderer = TestUtils.createRenderer();
      renderer.render(<Quote {...props} />);
      output = renderer.getRenderOutput();
      let [button, p, span, ul] = output.props.children;
      expect(button.type).toBe('button');
      expect(button.key).toEqual('enchiridion_4');
      expect(p.type).toBe('p');
      expect(span.type).toBe('span');
      expect(ul.type).toBe('ul');
    });
  });
});
