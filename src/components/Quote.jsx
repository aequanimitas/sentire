import React from 'react';

export default React.createClass({
  getQuote: function() {
    return this.props.quote || [];
  },

  render: function() {
    return <div className="quote-container"> 
        <span className="quote-author">{this.props.quote.author}</span>
    </div>;
  }
});
