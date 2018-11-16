import React, { Component } from 'react';
import Books from './Books';

export default class Bookshelf extends Component {
  render() {
    // Below, bookshelfTitle is passed into Bookshelf by ListBooks. It's just a string. I should be using it as a query parameter and passing that query parameter to Books.
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <Books 
                    cb={this.props.cb} 
                    showingBooks={this.props.bookList}  
                    theShelf={this.props.theShelf}
                />
            </div>
        </div>
    )
  }
}
