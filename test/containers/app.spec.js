import React from 'react';
import expect from 'expect';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { App } from '../../client/containers/App';
import configureStore from '../../client/store/configureStore'

function setup() {
  const store = configureStore();
  const props = {
    entry: require('../fixtures/epictetus.json').data[0]
  }
  const component = shallow(
      <App {...props} />
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
