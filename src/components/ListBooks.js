import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {
    // sample data
    state = {

        currentlyReading:
            [
                { title: "schmoop morp", authors: ["bob blob", "jenny butt"], id: 110 },
                { title: "flerp ger'blort", authors: ["waldo finklestein", "schlomy meyers"], id: 111 },
                { title: "poop splat", authors: ["stinky dude", "other guy"], id: 112 }
            ],

        wantToRead:
            [
                { title: "Haveglervindy", authors: ["bob blob", "jenny butt"], id: 120 },
                { title: "Foozen ber Happers", authors: ["waldo finklestein", "schlomy meyers"], id: 121 },
                { title: "L'amazing David", authors: ["stinky dude", "other guy"], id: 123 }
            ],

        read:
            [
                { title: "Absolutely Not", authors: ["bob blob", "jenny butt"], id: 130 },
                { title: "No you didn't!", authors: ["waldo finklestein", "schlomy meyers"], id: 131 },
                { title: "Not this again.", authors: ["stinky dude", "other guy"], id: 132 }
            ]
    }

    // const booksArray = getAll().then(result => {
    // 	console.log(Object.values(result));
    // 	return Object.values(result);
    // });

    moveBook = (newShelf, oldShelf, theBook) => {
        //console.log("moveBook fired and the new shelf will be ", newShelf, " \nthe old shelf was ", oldShelf, " \nand the book object is ", theBook);
        // add the book to the new shelf
        if(newShelf !== "none"){
            this.setState(
                {[newShelf] : (() => {
                    this.state[newShelf].push(theBook);
                    return this.state[newShelf];
                })()}
            );
        }
        // remove the book from its old shelf
        this.setState(
            {[oldShelf] : this.state[oldShelf].filter( v => v !== theBook)}
        );
    }

    

    render() {

        return (
            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <Bookshelf
                        theShelf={"currentlyReading"}
                        bookList={this.state.currentlyReading}
                        bookshelfTitle={"Currently Reading"}
                        cb={this.moveBook} />
                    <Bookshelf
                        theShelf={"wantToRead"}
                        bookList={this.state.wantToRead}
                        bookshelfTitle={"Want to Read"}
                        cb={this.moveBook} />
                    <Bookshelf
                        theShelf={"read"}
                        bookList={this.state.read}
                        bookshelfTitle={"Read"}
                        cb={this.moveBook} />
                </div>

                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>

            </div>
        )
    }
}
