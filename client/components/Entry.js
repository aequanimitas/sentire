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
               <div className="entry-meta-info">&nbsp;-&nbsp;
               <span className="entry-author entry-link" 
         	           key={entry.id + 'author'}>
                     {entry.author}, &nbsp;
               </span>
               <span className="entry-book entry-link" key={entry.id + 'book'}>
                 {entry.bookTitle}
               </span>
               </div>
             </div>
             <div className="entry-interact">
             </div>
           </div>
  }
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}

export default Entry;
