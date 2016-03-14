import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class MetaAction extends Component {
  constructor(props) {
    super(props);
    this.state = { more: false };
    this.seeMore = this.seeMore.bind(this);
  }

  seeMore() {
    console.log('called seeMore()');
    this.setState({ more: this.state.more ? false : true });
  }

  render() {
    return (
    <div className="entry-meta-actions">
      <a href="#" className="entry-see-more" onClick={this.seeMore}>
        { this.state.more ? 'Less' : 'More' }
      </a>
     </div>
    )
  }
}

export default MetaAction;
