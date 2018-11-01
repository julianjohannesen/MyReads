import React, { Component } from 'react';
import Books from './books';
import { getAll } from '../BooksAPI.js';

export default class Bookshelf extends Component {
  render() {
    // Some temporary data to check some things.
    //const someBooks = [{title:"To Kill a Mocking Bird"}, {title:"Some Other Book about Fitness"}, {title: "A Third Book about Parenting"}];
    const someBooks = getAll();
    // Below, bookshelfTitle is passed into Bookshelf by ListBooks. It's just a string. I should be using it as a query parameter and passing that query parameter to Books.
    // someBooks is temporary data passed to Books, but I could use getAll()
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <Books showingBooks={someBooks} />
            </div>
        </div>
    )
  }
}
