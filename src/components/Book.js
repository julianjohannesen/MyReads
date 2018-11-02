import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
import Books from './Books';

export default class Book extends Component {

    render() {
        const book = this.props.book;
        return (

            <li key={Books.id}>
                <div className="book">

                    <div className="book-top">
                    {/*this is where we get the book cover background image */}
                        <div className="book-cover" style={{background: book.style}} />
                        <ShelfChanger />
                    </div>

                    <div className="book-title">
                        {book.title || "No title"}
                    </div>

                    <div className="book-authors">
                        {book.authors.join(", ") || "No author"}
                    </div>

                </div>
            </li>

        )
    }
}

