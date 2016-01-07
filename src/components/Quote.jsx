import React from 'react';

export default React.createClass({
  getTags: function() {
    return this.props.quote.tags.toArray() || [];
  },

  render: function() {
    return <div className="quote-container">
      <p className="quote-text">{this.props.quote.quote}</p>
      <span className="quote-author">{this.props.quote.author}</span>
      <ul className="tags">
        {this.getTags().map(tag => 
          <li className="tag" key={tag}>{tag}</li>
        )}
      </ul>
    </div>;
  }
});
