import expect, { createSpy } from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import MetaAction from '../../client/components/MetaActions'

function setup(value = 0) {
  const props = {
    more: false,
    seeMore: createSpy()
  }

  const component = shallow(
    <MetaAction {...props} />
  );
  return {
    component: component,
    more: component.find('a'),
    props: props
  }
}

describe('Meta Action Component', () => {
  it('should display more', () => {
    const { more } = setup()
    expect(more.text()).toMatch(/^More/);
  });

  it('callback fn should be called', () => {
    let { props, component } = setup()
    component.find('a').simulate('click');
    component.update(); 
    expect(props.seeMore).toHaveBeenCalled();
    // expect(component.find('a').text()).toMatch(/^Less/); transfer this test to entry
  });
});
