import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
           <label htmlFor="search-field"> Search </label>
           <input type="text" id="search-field" placeholder="procrastination, laziness" />
           <button type="submit">Search!</button>
        </form>
        <section> hot loader? </section>
      </div>
      ) 
  }
}

ReactDOM.render(
  <App /> , 
  document.getElementById('react-container'));
