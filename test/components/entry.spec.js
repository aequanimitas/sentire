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

});
