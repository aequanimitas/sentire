import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = { more: false };
    this.seeMore = this.seeMore.bind(this);
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
    let entry = Object.assign({}, this.props.entry);
    entry.initialText = entry.text.slice(0, entry.text.indexOf('.') + 1);
    let tempId = 'entry' + entry.id;
    let entryTextClasses = classnames('entry-text', { more: this.state.more });
    return <div className="entry-container column">
             <p className={entryTextClasses}>
               {this.state.more ? entry.text : entry.initialText}
             </p>
             <div className="entry-meta">
               <div className="entry-meta-info">&nbsp;-&nbsp;
               <span className="entry-author" key={entry.chapter + entry.id + 'author'}>
                 {entry.author}, &nbsp;
               </span>
               <span className="entry-book" key={entry.chapter + entry.id + 'book'}>
                 {entry.bookTitle}
               </span>
               </div>
               <div className="entry-meta-actions">
                 <a href="#" className="entry-see-more" onClick={this.seeMore}>
                   { this.state.more ? 'Less' : 'More' }
                 </a>
                </div>
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
