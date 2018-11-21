import React from "react";
import { Switch, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI"
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    // I couldn't figure out how to call getAll(), so I created a dummy variable. 
    nothingAtAll = getAll().then(r => this.setState({currentlyReading: r.currentlyReading, wantToRead: r.wantToRead, read: r.read }))

    // moveBook is called when the submit event fires in the shelfChanger component. It will move the book and re-render the shelves, while updating the db, but it avoids a second call to getAll()
    moveBook = (newShelf, oldShelf, theBook) => {
        // Don't allow moving from/to the same shelf
        if(oldShelf !== newShelf) {
            // On the search page, moving a book shouldn't cause it to disappear
            if (oldShelf !== "search") {
                // Remove the book from its old shelf
                this.setState({ [oldShelf]: this.state[oldShelf].filter(v => v !== theBook) });

            }        
            if (newShelf !== "none" && newShelf !== oldShelf) {
                const updateShelfState = () => {
                    // Add the book to the new shelf
                    this.state[newShelf].push(theBook);
                    // Return the shelf with the new book
                    return this.state[newShelf];
                }
                // Add the book to the new shelf
                this.setState({[newShelf]: updateShelfState()});
            } 
            // Update the db but avoid second getAll() request
            update(theBook, newShelf);
        }
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
