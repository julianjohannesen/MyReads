import React from "react";
import { Switch, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI"
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import NoMatch from "./components/NoMatch";
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
            //if(book.shelf === "none") none.push(book);
        })
        this.setState({
            currentlyReading: current,
            wantToRead: want,
            read: read,
            //none: none
        });
    }

    // I couldn't figure out how to call getAll() on page load, so I created a dummy variable. 
    componentWillMount = () => {
        getAll().then(r => this.shelveBooks(r));
    }

    // moveBook is called when the submit event fires in the shelfChanger component. It will update the DB, and move the book and re-render the shelves.
    moveBook = (theBook, newShelf) => {
        // I was getting an error where books would update after a 2nd book was moved. Wrapping the getAll() function in an arrow function seems to have corrected that. then() only works when you supply it a function, not a function call.
        update(theBook, newShelf).then(() => getAll().then(r => this.shelveBooks(r)));
    }

    render() {
        return (
            // Switch will only render the first component that matches the URL the user entered
            <Switch>
                <Route
                    exact path="/search"
                    // Can't use component here because we want to pass in some props
                    render={(props) => <Search {...props} library={this.state} cb={this.moveBook} />}
                />
                <Route
                    exact path="/"
                    render={(props) => <ListBooks {...props} library={this.state} cb={this.moveBook} />}
                />
                <Route 
                    render={(props) => <NoMatch {...props} theLocation={this.props.location} /> }
                />

            </Switch>
        );
    }
}

export default BooksApp;
