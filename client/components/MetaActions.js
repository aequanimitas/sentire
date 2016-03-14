import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class MetaAction extends Component {
  render() {
    return (
    <div className="entry-meta-actions">
      <a href="#" className="entry-see-more" onClick={this.props.seeMore}>
        { this.props.more ? 'Less' : 'More' }
      </a>
     </div>
    )
  }
}

MetaAction.propTypes = {
  more: PropTypes.bool.isRequired,
  seeMore: PropTypes.func.isRequired
}

export default MetaAction;
