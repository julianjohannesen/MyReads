import React from "react";
import { Switch, Route } from "react-router-dom";
// import * as BooksAPI from "./BooksAPI";
import Search from "./components/search";
import ListBooks from "./components/list-books";
import "./App.css";

class BooksApp extends React.Component {

  render() {

    return (
      <div className="app">
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={ListBooks} />
        </Switch>
      </div>
    );
  }
  
}

export default BooksApp;
