import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/search";
import ListBooks from "./components/list-books"
import "./App.css";

class BooksApp extends React.Component {

  // This state used to be used to determine when to show the search bar, but we don't need it because we're using react router to accomplish this now.
  // state = {showSearchPage: false}

  render() {
    return (
      <div className="app">
        {/*In the original page, if the state of showSearchPage was truthy, then the search page would show, otherwise the list books view  would show. But using React Router, we can dispense with the state and the conditional statement */}
        <Search />
		<ListBooks />
      </div>
    );
  }
}

export default BooksApp;
