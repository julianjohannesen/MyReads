import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
import noImage from '../icons/no-image-icon-4.gif'

export default class Book extends Component {

    render() {
        const book = this.props.theBook;
        console.log("From the Book component, book is ", this.props.theBook);
        const bookCover = () => {
            if(book.imageLinks && book.imageLinks.thumbnail) {
                return {
                    backgroundImage:`url(${book.imageLinks.thumbnail})`,
                    backgroundRepeat:'no-repeat',
                    backgroundColor:'#ffffff',
                    width: '128px',
                    height: '181px'
                }
            } else {
                return {
                    backgroundImage:`url(${noImage})`,
                    backgroundRepeat:'no-repeat',
                    backgroundColor:'#ffffff',
                    width: '128px',
                    height: '181px'
                }
            }
        }
        return (
            <li>
            {console.log("From the Book component, book is ", this.props.theBook)}
                <div className="book">

                    <div className="book-top">
                        <div className="book-cover" style={bookCover()} />
                        <ShelfChanger 
                            cb={this.props.cb} 
                            oldShelf={this.props.theShelf}
                            theBook={book}  
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

