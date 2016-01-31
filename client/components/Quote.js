import React, { Component, PropTypes } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }

  handleClick() {
    this.props.addFavorite(this.props.quote.book_id + '_' + this.props.quote.chapter);
  }

  render() {
    let tempId = this.props.quote.book_id + '_' + this.props.quote.chapter;
    return (
      <div className="quote-container column">
        <button onClick={ this.handleClick.bind(this) }
                key={tempId}
                className="favorite">favorite</button>
        <p className="quote-text">{this.props.quote.text}</p>
        <span className="quote-author">{this.props.quote.author.name}</span>
      </div>
    );
  }
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired
}

export default Quote;
