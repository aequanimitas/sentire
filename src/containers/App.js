import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <form>
           <input type="text" id="search-field" placeholder="procrastination, laziness" />
           <button type="submit">Search!</button>
        </form>
        <section> hot loader? </section>
      </div>
    );
  }
}
