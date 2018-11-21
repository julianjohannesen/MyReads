import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books.js';

export default class ListBooks extends Component {

    shelves = [
        {
            shelf: "currentlyReading",
            title: "Currently Reading"
        },
        {
            shelf: "wantToRead",
            title: "Want to Read"
        },
        {
            shelf: "read",
            title: "Read"
        }
    ]

    renderShelves = () => {
        return this.shelves.map((shelf, index) => (
            <div className="bookshelf" key={index}>
                {console.log("In ListBooks.js this.props is: ", this.props)}
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Books shelf={shelf.shelf} library={this.props.library[shelf.shelf]} cb={this.props.cb} />
                        {console.log("Should be just one shelf: ", this.props.library[shelf.shelf])}
                    </ol>
                </div>
            </div>
    ))};

    render() {
        return (
            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    {this.renderShelves()}
                </div>

                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>

            </div>
        )
    }
}
