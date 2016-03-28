import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme'
import Entry from '../../client/components/Entry';

function setup() {
  const props = {
    entry: require('../fixtures/epictetus.json').data[0],
    addFavorite: expect.createSpy()
  };
  const component = shallow(
    <Entry {...props} />
  );
  return { 
    component: component,
    moreLink: component.find('.entry-see-more'),
    entryText: component.find('.entry-text'),
    author: component.find('.entry-author'),
    book: component.find('.entry-book')
  }
}

describe('Entry Component', () => {
  describe('click more', () => {
    it('should change link text to less', () => {
      let { moreLink, component } = setup()
      moreLink.simulate('click');
      expect(component.find('.entry-see-more').text()).toMatch(/^Less/)
    });

    it('should add class .more to component', () => {
      let { moreLink, entryText, component } = setup()
      moreLink.simulate('click');
      expect(component.find('.entry-text').hasClass('more')).toBe(true);
    });
  });

  describe('info', () => {
    it('entry author should be a link', () => {
      let { author } = setup();
      expect(author.type()).toEqual('a');
    }); 

    it('entry author should have class entry-link', () => {
      let { author } = setup();
      expect(author.hasClass('entry-link')).toBe(true);
    }); 

    it('entry author should be a link', () => {
      let { author } = setup();
      expect(author.prop('href')).toEqual('/api/entries?author=epictetus');
    })

    it('entry book should be a link', () => {
      let { book } = setup();
      expect(book.type()).toEqual('a');
    }); 
  });
});
