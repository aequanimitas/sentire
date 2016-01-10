import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const { quote, author } = this.props.quote;
    const bookVerse = this.props.quote.book + '_' + this.props.quote.verse;
    const tags = this.props.quote.tags.toArray() || [];
    return <div className="quote-container">
      <button key={bookVerse} onClick={() => this.props.favorite(bookVerse)} className="favorite">favorite</button>
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
