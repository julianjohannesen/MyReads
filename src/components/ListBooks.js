import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {
    // sample data
    state = {
        // Just a list of book IDs, not the whole book
        current: [{title: "schmoop morp", authors: ["bob blob", "jenny butt"], id: 110},{title: "flerp ger'blort", authors: ["waldo finklestein", "schlomy meyers"], id: 111},{title: "poop splat",  authors: ["stinky dude", "other guy"], id: 112}],
        wantToRead: [{title: "schmoop morp", authors: ["bob blob", "jenny butt"], id: 120},{title: "flerp ger'blort", authors: ["waldo finklestein", "schlomy meyers"], id: 121},{title: "poop splat",  authors: ["stinky dude", "other guy"], id: 123}],
        read: [{title: "schmoop morp", authors: ["bob blob", "jenny butt"], id: 130},{title: "flerp ger'blort", authors: ["waldo finklestein", "schlomy meyers"], id: 131},{title: "poop splat",  authors: ["stinky dude", "other guy"], id: 132}]
    }

    moveBook = (e) => {
        console.log("moveBook fired: ", e);
        return e.target.value

        
    }

  render() {

    return (
        <div className="list-books">
          
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
          
            <div className="list-books-content">
                <Bookshelf bookList={this.state.current} bookshelfTitle={"Currently Reading"} cb={this.moveBook} />
                <Bookshelf bookList={this.state.wantToRead} bookshelfTitle={"Want to Read"} cb={this.moveBook}  />
                <Bookshelf bookList={this.state.read} bookshelfTitle={"Read"}  cb={this.moveBook} />
            </div>
          
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
            </div>

        </div>
    )
  }
}
