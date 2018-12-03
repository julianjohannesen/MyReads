import React from "react";
import { Switch, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI"
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import NoMatch from "./components/NoMatch";
import "./App.css";

class BooksApp extends React.Component {

    // I create a state for each "shelf".
    state = {
        allBooks: [],
        currentlyReading: [],
        wantToRead: [],
        read: [],
    }

    // shelveBooks will shelve the books on their appropriate shelf
    shelveBooks = (result) => {
        // Shelf holders
        const current = [], want = [], read = [];
        // Push the books to their respective shelf holders
        result.forEach(book => {
            if(book.shelf === "currentlyReading") current.push(book);
            if(book.shelf === "wantToRead") want.push(book);
            if(book.shelf === "read") read.push(book);
        });
        // Set the states
        this.setState({
            allBooks: result,
            currentlyReading: current,
            wantToRead: want,
            read: read,
        });
    }

    // moveBook is called when handleQuery() is called on a change event in the shelfChanger component. It will update the DB, move the book, and re-render the shelves.
    moveBook = (theBook, newShelf) => {
        // I was getting an error where books would update after a 2nd book was moved. I'd like to thank my anonymous reviewer for pointing out that I needed to wrap the getAll() function in an arrow function. Obviously, then() only works when you supply it a function, not a function call (unless that call returns a function, I suppose).
        update(theBook, newShelf).then(() => getAll().then(result => this.shelveBooks(result)));
    }
    
    // I couldn't figure out how to call getAll() on page load, so I created a dummy variable. Fortunately, Jason Michael White pointed out that I could call getAll() in componentWillMount.
    componentWillMount = () => {
        getAll().then(result => this.shelveBooks(result));
    }

    render() {
        return (
            // Switch will only render the first component that matches the URL the user entered. The final component is a 404 page of sorts called NoMatch.
            <Switch>
                <Route
                    exact path="/search"
                    // Can't use component here because we want to pass in some props
                    render={(props) => <Search {...props} library={this.state.allBooks} cb={this.moveBook} />}
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
