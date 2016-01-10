import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import {Map, List} from 'immutable'
import Quote from '../../src/components/Quote';
import { expect } from 'chai';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithClass,
  Simulate
} = ReactTestUtils;

describe('Quote box', () => {
  let quote, component;
  beforeEach(() => {
    quote = Map({
      quote: 'With regard to whatever objects give you delight, are useful, or are ' +
             'deeply loved, remember to tell yourself of what general nature they ' +
             'are, beginning from the most insignificant things. If, for example, ' +
             'you are fond of a specific ceramic cup, remind yourself that it is ' +
             'only ceramic cups in general of which you are fond. Then, if it ' +
             'breaks, you will not be disturbed. If you kiss your child, or your ' +
             'wife, say that you only kiss things which are human, and thus you ' +
             'will not be disturbed if either of them dies.',
       author: 'epictetus',
       book: 'enchiridion',
       verse: '4',
       tags: List.of('attachment', 'impression')
    });
    component = renderIntoDocument(<Quote quote={quote.toObject()}/>);
  });
  describe('author', () => {
    let author;

    beforeEach(() => {
      author = scryRenderedDOMComponentsWithTag(component, 'span');
    });

    it('text should be equal to epictetus', () => {
      expect(author[0].textContent).to.equal('epictetus');
    });

    it('should have class quote-author', () => {
      expect(author[0].classList[0]).to.equal('quote-author');
    });

  });

  describe('quote', () => {
    let content;

    beforeEach(() => {
      content = scryRenderedDOMComponentsWithClass(component, 'quote-text');
    });

    it('should have class quote-text', () => {
      expect(content[0].classList[0]).to.equal('quote-text');
    });

    it('should have the exact content', () => {
      expect(content[0].textContent).to.equal(
       'With regard to whatever objects give you delight, are useful, or are ' +
       'deeply loved, remember to tell yourself of what general nature they ' +
       'are, beginning from the most insignificant things. If, for example, ' +
       'you are fond of a specific ceramic cup, remind yourself that it is ' +
       'only ceramic cups in general of which you are fond. Then, if it ' +
       'breaks, you will not be disturbed. If you kiss your child, or your ' +
       'wife, say that you only kiss things which are human, and thus you ' +
       'will not be disturbed if either of them dies.' 
      );
    });
  });

  describe('tags', () => {
    let tags, tagContainer;

    beforeEach(() => {
      tagContainer = scryRenderedDOMComponentsWithClass(component, 'tags');
      tags = scryRenderedDOMComponentsWithClass(component, 'tag');
    });

    it('should have a ul', () => {
       expect(tagContainer.length).to.equal(1);
    });

    it('should have two tags', () => {
       expect(tags.length).to.equal(2);
    });
    
    it('should be attachement', () => {
       expect(tags[0].textContent).to.equal('attachment');
    });

    it('should be impression', () => {
      expect(tags[1].textContent).to.equal('impression');
    });
  });

  describe('favorite button', () => {
    let faveButton;
    beforeEach(() => {
      faveButton = findRenderedDOMComponentWithTag(component, 'button');
    });

    it('should just exist', () => {
      expect(faveButton.textContent).to.equal('favorite');
    });

    it('should have class name favorite', () => {
      expect(faveButton.classList[0]).to.equal('favorite');
    });

    it('should invoke callback when clicked', () => {
      let favorited;
      const favorite = (bookVerse) => favorited = bookVerse;
      component = renderIntoDocument(<Quote quote={quote.toObject()} favorite={favorite} />);
      faveButton = findRenderedDOMComponentWithTag(component, 'button');
      Simulate.click(faveButton);
      expect(favorited).to.equal('enchiridion_4');
    });

  });
})
