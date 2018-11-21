import React from "react";
import { Switch, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI"
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {

    // I create a state for each "shelf" including "none" and "search" but ListBooks will only ever display the first three shelves.
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
        none: [],
        search: []
    }

    // I couldn't figure out how to call getAll(), so I created a dummy variable. 
    nothingAtAll = getAll().then(r => this.setState({currentlyReading: r, wantToRead: r, read: r, none: r }))

    // moveBook is called when the submit event fires in the shelfChanger component. It will update the DB, and move the book and re-render the shelves.
    moveBook = (newShelf, oldShelf, theBook) => {

        // updateShelfState will push the book to the new shelf and then return the new shelf 
        const updateShelfState = () => {
            // Add the book to the new shelf
            this.state[newShelf].push(theBook);
            // Return the shelf with the new book
            return this.state[newShelf];
        }

        // Remove the book from its old shelf and add it to it's new shelf
        this.setState(
            { 
                // Remove the book from its old shelf
                [oldShelf]: this.state[oldShelf].filter(v => v !== theBook),
                // Call updateShelfState to add the book to the new shelf
                [newShelf]: updateShelfState() 
            }
        );

        // Update the db, but avoid any other requests. On page refresh, the books that appear will be called from the DB with their proper shelves
        update(theBook, newShelf);
    }

    render() {
        return (
            <Switch>
                <Route
                    exact path="/search"
                    render={(props) => <Search {...props} library={this.state} cb={this.moveBook} />}
                    />
                <Route
                    exact path="/"
                    render={(props) => <ListBooks {...props} library={this.state} cb={this.moveBook} />}
                />
            </Switch>
        );
    }
}

export default BooksApp;
