import React, { Component } from "react";
import { Link } from "react-router-dom";
import Books from "./books";
import BookAPI, { search } from "../BookAPI";

export default class Search extends Component {
  state = { query: "" };

  handleQuery = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const someBooks = [{title:"To Kill a Mocking Bird"}, {title:"Some Other Book about Fitness"}, {title: "A Third Book about Parenting"}];

    let query = this.state.query;
    let showingBooks;
    if (query) {
      //For some reason, I was having a problem with escapeRegExp(this.state.query), "i"
      const match = new RegExp(query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
      showingBooks = someBooks.filter(aBook => match.test(aBook.title));
    } else {
      showingBooks = someBooks;
    }

    return (
      //
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <form
            className="search-books-input-wrapper"
            onSubmit={event => event.preventDefault()}
          >
            <label htmlFor="book-search">
              Book Search
              <input
                name="book-search"
                type="text"
                value={this.state.query}
                onChange={this.handleQuery}
                placeholder="Search by title or author"
              />
            </label>
          </form>
        </div>

        <div className="search-books-results">
          <Books showingBooks={showingBooks} />
        </div>
      </div>
    );
  }
}
