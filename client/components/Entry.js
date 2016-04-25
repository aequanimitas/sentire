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
    entry.initialText = entry.text.slice(0, entry.text.indexOf('.') + 1);
    let tempId = 'entry' + entry.id;
    let entryTextClasses = classnames('entry-text')
    return <div className="entry-container column">
             <p className={entryTextClasses}>
               {entry.text}
             </p>
             <div className="entry-meta">
               <span className="entry-author"
         	           key={entry.id + 'author-book' }>
                     - {entry.author}, {entry.bookTitle}
               </span>
             </div>
           </div>
  }
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}

export default Entry;
