import React, { Component, PropTypes } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }

  handleClick() {
    this.props.addFavorite(this.props.entry.book_id + '_' + this.props.entry.chapter);
  }

  render() {
    let tempId = this.props.entry.book.name + '_' + this.props.entry.chapter;
    return (
      <div className="entry-container column column-33">
        <button onClick={ this.handleClick.bind(this) }
                key={tempId}
                className="favorite">favorite</button>
        <p className="entry-text">{this.props.entry.text}</p>
        <span className="entry-author">{this.props.entry.author.name}</span>
      </div>
    );
  }
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired
}

export default Entry;
