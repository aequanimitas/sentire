import React, { Component, PropTypes } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }

  handleClick() {
    this.props.addFavorite(this.props.quote.book + '_' + this.props.quote.chapter);
  }

  render() {
    let tempId = this.props.quote.book + '_' + this.props.quote.chapter;
    return (
      <div className="qoute-container container">
        <button onClick={ this.handleClick.bind(this) }
                key={tempId}
                className="favorite">favorite</button>
        <p className="quote-text">{this.props.quote.quote}</p>
        <span className="quote-author">{this.props.quote.author}</span>
        <ul className="tags row">
          {this.props.quote.tags.map(tag => <li className="tag column" key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired
}

export default Quote;
