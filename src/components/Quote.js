import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../actions/quotes.js';

export class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }

  handleClick(tempId) {
    this.props.dispatch(addFavorite(tempId));
    this.setState({disabled: true});
  }

  render() {
    const tempId = this.props.quote.book + '_' + this.props.quote.chapter;
    return (
      <div className="qoute-container container">
        <button onClick={ () => this.handleClick(tempId) }
                key={tempId}
                disabled={this.state.disabled}
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
  quote: PropTypes.object.isRequired
}

export default connect()(Quote);
