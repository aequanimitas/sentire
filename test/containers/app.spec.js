import React from 'react';
import expect from 'expect';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { App } from '../../client/containers/App';
import configureStore from '../../client/store/configureStore'

function setup() {
  const store = configureStore();
  const props = {
    entry: require('../fixtures/epictetus.json').data[0],
    dispatch: (() => {})
  }
  return {
    fullMount: mount(<App {...props} />),
    shallowMount: shallow(<App {...props} />)
  }
}

describe('App container', () => {
  it('should have class column', () => {
    let app = setup().shallowMount
    expect(app.hasClass('column')).toBe(true);
  })

  describe('buttons', () => {
    let wrapper, randomBtn, copyBtn
    beforeEach(() => {
      wrapper = setup().fullMount.find('.btn-wrapper')
    })

    describe('random button', () => {
      let randomBtn

      beforeEach(() => {
        randomBtn = wrapper.find('.random-btn')
      })
      it('should exist', () => {
        expect(randomBtn.length).toEqual(1)
      })
      it('text should be next', () => {
        expect(randomBtn.text()).toEqual('next')
      })
      it('and should have class .ctrl-btn', () => {
        expect(randomBtn.hasClass('ctrl-btn')).toEqual(true)
      })
      it('and wrapped inside the btn-wrapper', () => {
        expect(randomBtn.parent()).toEqual(wrapper)
      })
      it('and nextEntry is bound to onClick', () => {
        expect(randomBtn.props().onClick.name.split(' ')[1]).toEqual('nextEntry')
      })
    })

    describe('copy button', () => {
      beforeEach(() => {
        copyBtn = wrapper.find('.copy-btn')
      })
      it('should exist', () => {
        expect(copyBtn.length).toEqual(1)
      })
      it('text should be next', () => {
        expect(copyBtn.text()).toEqual('copy')
      })
      it('and wrapped inside the btn-wrapper', () => {
        expect(copyBtn.parent()).toEqual(wrapper)
      })
      it('and copyEntryText is bound to onClick', () => {
        expect(copyBtn.props().onClick.name.split(' ')[1]).toEqual('copyEntryText')
      })
      it('and should have class .ctrl-btn', () => {
        expect(copyBtn.hasClass('ctrl-btn')).toEqual(true)
      })
    })
  })
});
