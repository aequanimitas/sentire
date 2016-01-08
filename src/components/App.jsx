import React from 'react';
import {Map, List} from 'immutable';

const quote = Map({
    quote: 'With regard to whatever objects give you delight, are useful, or are ' +
           'deeply loved, remember to tell yourself of what general nature they ' +
           'are, beginning from the most insignificant things. If, for example, ' +
           'you are fond of a specific ceramic cup, remind yourself that it is ' +
           'only ceramic cups in general of which you are fond. Then, if it ' +
           'breaks, you will not be disturbed. If you kiss your child, or your ' +
           'wife, say that you only kiss things which are human, and thus you ' +
           'will not be disturbed if either of them dies.',
     author: 'epictetus',
     tags: List.of('attachment', 'impression')
  });

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {quote: quote.toObject()});
  }
});
