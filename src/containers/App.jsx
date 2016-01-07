import React, {Component} from 'react';

export default React.createClass({
  render: function() {
    return 
      <div>
        <form>
           <label htmlFor="search-field"> Search </label>
           <input type="text" id="search-field" placeholder="procrastination, laziness" />
           <button type="submit">Search!</button>
        </form>
        <section> hot loader? </section>
      </div>
    ;
  }
});
