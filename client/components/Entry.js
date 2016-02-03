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
    let entry = Object.assign({}, this.props.entry);
    let key = 'favorite_' + entry.id;
    this.props.addFavorite(key);
  }

  render() {
    let entry = this.props.entry;
    let tempId = 'entry' + entry.id;
    let entryTextClasses = classnames('entry-text', { more: this.state.more });
    return <div className="entry-container column">
             <p className={entryTextClasses}>{entry.text}</p>
             <div className="entry-meta">
               <span className="entry-author" key={entry.chapter + entry.id + 'author'}>
                 {entry.author} - &nbsp;
               </span>
               <span className="entry-book" key={entry.chapter + entry.id + 'book'}>
                 {entry.bookTitle}
               </span>
               <a href="#" className="entry-see-more" onClick={this.seeMore.bind(this)}>
                 { this.state.more ? 'Less' : 'More' }
               </a>
               <a href="#" onClick={ this.handleClick.bind(this) }
                       key={tempId}
                       className="entry-favorite">&#8902;</a>
             </div>
             <div className="entry-interact">
             </div>
           </div>
  }
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired
}

export default Entry;
