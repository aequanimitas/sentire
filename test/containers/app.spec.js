import React from 'react';
import expect from 'expect';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { App } from '../../client/containers/App';
import configureStore from '../../client/store/configureStore'

function setup() {
  const store = configureStore();
  const component = shallow(
      <App />
  )

  return {
    component: component
  }
}

describe('App container', () => {
  it('should have class column', () => {
    const app = setup()
    expect(app.component.hasClass('column')).toBe(true);
  })
});
