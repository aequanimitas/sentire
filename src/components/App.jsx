import React from 'react';
import {Map, List} from 'immutable';
import {DevTools} from '../utils/devTools';

export default React.createClass({
  render: function() {
    return this.props.children;
  }
});
