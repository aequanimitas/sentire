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
    this.props.addFavorite(this.props.entry.book.name + '_' + this.props.entry.chapter_id);
  }

  render() {
    let tempId = this.props.entry.book.name + '_' + this.props.entry.chapter.id;
    let entryTextClasses = classnames('entry-text', { more: this.state.more });
    return <div className="entry-container column">
             <p className={entryTextClasses}>{this.props.entry.text}</p>
             <span className="entry-author">
               {this.props.entry.author.name} - &nbsp;
             </span>
             <span className="entry-book"> 
               {this.props.entry.book.name}
             </span>
             <a href="#" className="entry-see-more" onClick={this.seeMore.bind(this)}>
             { this.state.more ? 'Less' : 'More' }
             </a>
             <a href="#" onClick={ this.handleClick.bind(this) }
                     key={tempId}
                     className="entry-favorite">&#8902;</a>
           </div>
  }
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired
}

export default Entry;
