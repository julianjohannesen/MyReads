import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './bookshelf';

export default class ListBooks extends Component {
  render() {

    return (
        <div className="list-books">
          
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
          
            <div className="list-books-content">
                <Bookshelf bookshelfTitle={"Currently Reading"} />
                <Bookshelf bookshelfTitle={"Want to Read"} />
                <Bookshelf bookshelfTitle={"Read"} />
            </div>
          
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
            </div>

        </div>
    )
  }
}
