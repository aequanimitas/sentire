import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme'
import Entry from '../../client/components/Entry';

function setup() {
  const props = {
    entry: require('../fixtures/epictetus.json').data[0],
    addFavorite: expect.createSpy()
  };
  const component = mount(
    <Entry {...props} />
  );
  return { 
    component: component
  }
}

describe('Entry Component', () => {
  it('should change text to less', () => {
    let { component } = setup()
    component.find('.entry-see-more').simulate('click');
    expect(component.find('.entry-see-more').text()).toMatch(/^Less/)
  });
});
