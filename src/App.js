import React from "react";
import { Switch, Route } from "react-router-dom";
// import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {

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

    moveBook = (newShelf, oldShelf, theBook) => {
        console.log("From inside the moveBook function, the arguments for the function are: ", newShelf, oldShelf, theBook);
        if (newShelf !== "none") {
            // add the book to the new shelf
            this.setState(
                {
                    [newShelf]: (() => {
                        console.log("From inside setState in moveBook, this.state[newShelf] is ", this.state[newShelf])
                        this.state[newShelf].push(theBook);
                        return this.state[newShelf];
                    })()
                }
            );
        }
        // remove the book from its old shelf
        if (oldShelf !== "search") {
            this.setState(
            { [oldShelf]: this.state[oldShelf].filter(v => v !== theBook) }
        );
        }
    }

    render() {

        return (
            <div className="app">
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
            </div>
        );
    }

}

export default BooksApp;
