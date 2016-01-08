import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const { quote, author } = this.props.quote;
    const tags = this.props.quote.tags.toArray() || [];
    return <div className="quote-container">
      <p className="quote-text">{quote}</p>
      <span className="quote-author">{author}</span>
      <ul className="tags">
        {tags.map(tag => 
          <li className="tag" key={tag}>{tag}</li>
        )}
      </ul>
    </div>;
  }
});
