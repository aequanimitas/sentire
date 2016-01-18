import React, { Component, PropTypes } from 'react';

class Quote extends Component {
  handleClick() {
    this.props.addFavorite(this.props.quote.book + '_' + this.props.quote.chapter);
  }
  render() {
    return (
      <div className="qoute-container">
        <button onClick={ e => this.handleClick(e)}
                key={this.props.quote.book + '_' + this.props.quote.chapter} 
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
  quote: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Quote;
