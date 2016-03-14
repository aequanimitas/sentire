import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import MetaAction from '../../client/components/MetaActions'

function setup(value = 0) {
  const component = shallow(
    <MetaAction />
  );
  return {
    component: component,
    more: component.find('a')
  }
}

describe('Meta Action Component', () => {
  it('should display more', () => {
    const { more } = setup()
    expect(more.text()).toMatch(/^More/);
  });
  it('should display less', () => {
    const { component } = setup()
    component.find('a').simulate('click');
    component.update(); 
    expect(component.find('a').text()).toMatch(/^Less/);
  });
});
