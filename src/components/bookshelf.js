import React, { Component } from 'react';
import Books from './books';

export default class Bookshelf extends Component {
  render() {
    const someBooks = [{title:"To Kill a Mocking Bird"}, {title:"Some Other Book about Fitness"}, {title: "A Third Book about Parenting"}];

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
