import React, { Component, PropTypes } from 'react';

class Quote extends Component {
  render() {
    return (
      <div>
        <button key={this.props.quote.book + '_' + this.props.quote.chapter} 
                className="favorite">favorite</button>
        <p className="quote-text">{this.props.quote.quote}</p>
        <span className="quote-author">{this.props.quote.author}</span>
        <ul className="tags">
          {this.props.quote.tags.map(tag => <li className="tag" key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
}

Quote.propTypes = {
  quote: React.PropTypes.object.isRequired 
}
export default Quote;
