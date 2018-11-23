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
    }

    // shelveBooks will take the response from getAll and shelve the books on their appropriate shelf
    shelveBooks = (result) => {
        // temp holders
        const current = [], want = [], read = [];
        result.forEach(book => {
            if(book.shelf === "currentlyReading") current.push(book);
            if(book.shelf === "wantToRead") want.push(book);
            if(book.shelf === "read") read.push(book);
        })
        this.setState({
            currentlyReading: current,
            wantToRead: want,
            read: read
        });
    }

    // I couldn't figure out how to call getAll() on page load, so I created a dummy variable. 
    componentWillMount = () => {
        getAll().then(r => this.shelveBooks(r));
    }

    // moveBook is called when the submit event fires in the shelfChanger component. It will update the DB, and move the book and re-render the shelves.
    moveBook = (theBook, newShelf) => {
        update(theBook, newShelf).then(getAll().then(r => this.shelveBooks(r)));
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
