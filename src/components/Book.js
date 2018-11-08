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
                        <div className="book-cover" style={{backgroundImage:`url('../icons/notfound.jpeg')`}} />
                        <ShelfChanger 
                            theBook={book}  
                            oldShelf={this.props.theShelf}
                            cb={this.props.cb} 
                        />
                    </div>

                    <div className="book-title">
                        {book.title || ""}
                    </div>

                    <div className="book-authors">
                        {(book.authors && book.authors.join(", ")) || ""}
                    </div>

                </div>
            </li>

        )
    }
}

