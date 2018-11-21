import React from "react";
import { Switch, Route } from "react-router-dom";
import { getAll } from "./BooksAPI"
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    nothingAtAll = getAll().then(r => this.setState({currentlyReading: r, wantToRead: r, read: r }))


    moveBook = (newShelf, oldShelf, theBook) => {
        if (oldShelf !== "search" && oldShelf !== newShelf) {
            this.setState(
                { 
                    [oldShelf]: this.state[oldShelf].filter(v => v !== theBook),
                }
                );
            }        
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
