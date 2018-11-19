import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {

    render() {

        return (
            <div className="list-books">
            {console.log("This is the ListBooks component. this.props.library is ", this.props.library)}
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <Bookshelf
                        theShelf={"currentlyReading"}
                        bookList={this.props.library.then(r=>r.filter(v=>v.shelf === "currentlyReading"))}
                        bookshelfTitle={"Currently Reading"}
                        cb={this.props.cb} />
                    <Bookshelf
                        theShelf={"wantToRead"}
                        bookList={this.props.library.then(r=>r.filter(v=>v.shelf === "wantToRead"))}
                        bookshelfTitle={"Want to Read"}
                        cb={this.props.cb} />
                    <Bookshelf
                        theShelf={"read"}
                        bookList={this.props.library.then(r=>r.filter(v=>v.shelf === "read"))}
                        bookshelfTitle={"Read"}
                        cb={this.props.cb} />
                </div>

                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>

            </div>
        )
    }
}
