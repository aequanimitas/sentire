import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = { more: false };
  }

  seeMore() {
    this.setState({ more: this.state.more ? false : true });
  }

  handleClick() {
    this.props.addFavorite(this.props.entry.book_id + '_' + this.props.entry.chapter_id);
  }

  render() {
    let tempId = this.props.entry.book.name + '_' + this.props.entry.chapter;
    let entryTextClasses = classnames('entry-text', { more: this.state.more });
    return <div className="entry-container column">
             <button onClick={ this.handleClick.bind(this) }
                     key={tempId}
                     className="favorite">favorite</button>
             <p className={entryTextClasses}>{this.props.entry.text}</p>
             <span className="entry-author">{this.props.entry.author.name}</span>
             <a href="#" className="entry-see-more" onClick={this.seeMore.bind(this)}>
             { this.state.more ? 'Less' : 'More' }
             </a>
           </div>
  }
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired
}

export default Entry;
