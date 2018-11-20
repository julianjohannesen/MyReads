import React from "react";
import { Switch, Route } from "react-router-dom";
import { getAll, get } from "./BooksAPI"
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {

    // sample data
    state = {
        currentlyReading: getAll(),
        wantToRead: getAll(),
        read: getAll()
    }
    
    moveBook = (newShelf, oldShelf, theBook) => {
        // If the old shelf is not the search page or the new shelf (you can't move a book from its own shelf to its own shelf), then use filter() to filter out the book we're moving and re-set the state of the old shelf
        if (oldShelf !== "search" && oldShelf !== newShelf) {
            this.setState(
                { 
                    [oldShelf]: this.state[oldShelf].filter(v => v !== theBook),
                }
            );
        }
        // If the new shelf is not "none" and is not the old shelf (you can't move a book from its own shelf to its own shelf), then, in an immediately invoked function,  use push to push the book we're moving onto the new shelf and then return the new shelf, so that we can re-set its state. I used the IIF because I wanted to make sure that when I returned the new shelf, it included the newly added book and I wasn't sure if it would otherwise.
        
        if (newShelf !== "none" && newShelf !== oldShelf) {
            this.setState(
                {
                    [newShelf]: (() => {
                        this.state[newShelf].push(theBook);
                        return this.state[newShelf];
                        })(),
                }
            );
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
