import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Quote = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div> 
      {this.props.quotes.map( qt =>
        <div className="quote-container" key={qt.author + qt.book + qt.verse}>
          <button key={qt.book + '_' + qt.verse} className="favorite">favorite</button>
          <p className="quote-text">{qt.quote}</p>
          <span className="quote-author">{qt.author}</span>
          <ul className="tags">
            {qt.tags.map(tag => 
              <li className="tag" key={tag}>{tag}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  }
});

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  }
}

export const QuoteContainer = connect(
  mapStateToProps
)(Quote);
