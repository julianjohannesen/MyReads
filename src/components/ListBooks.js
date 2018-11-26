import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generate } from 'shortid';
import Books from './Books.js';

export default class ListBooks extends Component {
    // I considered generating the shelves programmatically, but decided it just added unnecessary complexity.
    // I use shortid to generate a key for each call to Books.js
    render() {
        return (
            <div className="list-books">
            {console.log("Props: ", this.props.library.currentlyReading)}

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Books
                                    cb={this.props.cb}
                                    key={generate()}
                                    shelfBooks={this.props.library.currentlyReading}
                                />
                            </ol>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Books 
                                    cb={this.props.cb}
                                    key={generate()} 
                                    shelfBooks={this.props.library.wantToRead} 
                                />
                            </ol>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Books 
                                    cb={this.props.cb} 
                                    key={generate()} 
                                    shelfBooks={this.props.library.read} 
                                />
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>

            </div>
        )
    }
}
