import 'milligram/dist/milligram.css';
import React from 'react';
import { render } from 'react-dom';

let App = React.createClass({
  render: function() {
    return <div>Sentire</div>
  }
});

render(
  <App />,
  document.getElementById('root')
);
