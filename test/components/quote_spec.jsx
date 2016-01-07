import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Quote from '../../src/components/Quote';
import { expect } from 'chai';

describe('Quote box', () => {
  it('should have an author span', () => {
    const component = ReactTestUtils.renderIntoDocument( <Quote /> );
    const quoteAuthor = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
    expect(quoteAuthor.length).to.equal(1);
    expect(quoteAuthor[0].classList[0]).to.equal('quote-author');
  });
})
