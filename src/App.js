import React from "react";
import { Switch, Route } from "react-router-dom";
// import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {

    // sample data
    state = {
        currentlyReading:[],
        wantToRead:[],
        read:[]
    }

    moveBook = (newShelf, oldShelf, theBook) => {
        console.log("App.moveBook(): The arguments are: ", newShelf, oldShelf, theBook);
        // If the old shelf is not the search page or the new shelf (you can't move a book from its own shelf to its own shelf), then use filter() to filter out the book we're moving and re-set the state of the old shelf
        if (oldShelf !== "search" && oldShelf !== newShelf) {
            this.setState(
                { 
                    [oldShelf]: this.state[oldShelf].filter(v => v !== theBook),
                }
            );
        }
        // If the new shelf is not "none" and is not the old shelf (you can't move a book from its own shelf to its own shelf), then, in an immediately invoked function,  use push to push the book we're moving onto the new shelf and then return the new shelf, so that we can re-set its state 
        if (newShelf !== "none" && newShelf !== oldShelf) {
            this.setState(
                {
                    [newShelf]: (() => {
                        console.log("From inside setState in moveBook, this.state[newShelf] is ", this.state[newShelf])
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


    // currentlyReading:
    //     [
    //         { title: "schmoop morp", authors: ["bob blob", "jenny butt"], id: 110 },
    //         { title: "flerp ger'blort", authors: ["waldo finklestein", "schlomy meyers"], id: 111 },
    //         { title: "poop splat", authors: ["stinky dude", "other guy"], id: 112 }
    //     ],

    // wantToRead:
    //     [
    //         { title: "Haveglervindy", authors: ["bob blob", "jenny butt"], id: 120 },
    //         { title: "Foozen ber Happers", authors: ["waldo finklestein", "schlomy meyers"], id: 121 },
    //         { title: "L'amazing David", authors: ["stinky dude", "other guy"], id: 123 }
    //     ],

    // read:
    //     [
    //         { title: "Absolutely Not", authors: ["bob blob", "jenny butt"], id: 130 },
    //         { title: "No you didn't!", authors: ["waldo finklestein", "schlomy meyers"], id: 131 },
    //         { title: "Not this again.", authors: ["stinky dude", "other guy"], id: 132 }
    //     ]