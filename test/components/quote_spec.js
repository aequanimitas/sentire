import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Quote from '../../src/components/Quote';
import { expect } from 'chai';

describe('Quote box', () => {
  it('should have an author span', () => {
    const component = ReactTestUtils.renderIntoDocument( <Quote /> );
    console.log(ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'div'));
  });
})
