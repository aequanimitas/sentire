import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { AppConnect } from './App';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <AppConnect />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
