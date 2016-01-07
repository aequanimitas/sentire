import React from 'react';

export default React.createClass({
  getQuote: function() {
    return this.props.quote || [];
  },

  render: function() {
    return <div className="quote-container">
      <p className="quote-text">{this.props.quote.quote}</p>
      <span className="quote-author">{this.props.quote.author}</span>
    </div>;
  }
});
