import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';

export default class Book extends Component {

    render() {
        const book = this.props.theBook;
        return (

            <li>
                <div className="book">

                    <div className="book-top">
                    {/*this is where we get the book cover background image */}
                        <div className="book-cover" style={{background: book.style}} />
                        <ShelfChanger 
                            theBook={book}  
                            oldShelf={this.props.theShelf}
                            cb={this.props.cb} />
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

