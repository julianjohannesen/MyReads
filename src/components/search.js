import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { escapeRegExp } from 'escape-string-regexp';

export default class Search extends Component {

    state = { query: "" };

    handleQuery = event => {
        console.log("Main: The handleQuery event: ", event, "The event target: ", event.target);
        this.setState( {query: event.target.value} );
    }

  render() {

    let showingBooks;
    if(this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query, "i"));
        showingBooks = someBooks.filter( aBook  =>  match.test(aBook.title) );
    } else {
        showingBooks = someBooks;
    }
    console.log("After the if statement in render, the value of showingBooks is: ", showingBooks);

    return (
      // 
      <div className="search-books">

        <div className="search-books-bar">

          <Link
            to="/"
            className="close-search"
          >
            Close
          </Link>

          <form className="search-books-input-wrapper" onSubmit={event => event.preventDefault()} >
            <label htmlFor="book-search">Book Search
                <input name="book-search" type="text" value={this.state.query} onChange={this.handleQuery} placeholder="Search by title or author" />
            </label>
          </form>

        </div>

        <div className="search-books-results">
          <ol className="books-grid" ></ol>
        </div>

      </div>
    );
  }
}
