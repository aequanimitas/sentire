import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Entry extends Component {
  handleClick() {
    let entry = Object.assign({}, this.props.entry);
    let key = 'favorite_' + entry.id;
    this.props.addFavorite(key);
  }

  render() {
    let entry = Object.assign({}, this.props.entry);
    let tempId = 'entry' + entry.id;
    let entryTextClasses = classnames('entry-text')
    return <div className="entry-container column">
             <p className={entryTextClasses}>
               {entry.text}
             </p>
             <div className="entry-info">
               <span className="entry-author" key={entry.id + 'author'}>{entry.author},&nbsp;</span>
               <span className="entry-book" key={entry.id + 'book'}>{entry.bookTitle}</span>
             </div>
           </div>
  }
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}

export default Entry;
