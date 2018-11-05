import React, { Component } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import { search } from "../BooksAPI";

export default class Search extends Component {
  	state = { query: "" };

  	handleQuery = event => {
    	this.setState({ query: event.target.value });
  	};

  	render() {
		let query = this.state.query;
		// search() is a method of BooksAPI.js
    	let showingBooks = search(query);
    	console.log("From Search: The current value of showingBooks is: ", showingBooks);
		return (
			<div className="search-books">
				<div className="search-books-bar">
				<Link to="/" className="close-search">
					Close
				</Link>
				<form
					className="search-books-input-wrapper"
					onSubmit={event => event.preventDefault()}
				>
					<label htmlFor="book-search" class="hidden">
					Book Search
					<input
						name="book-search"
						type="text"
						value={this.state.query}
						onChange={this.handleQuery}
						placeholder="Search by title or author"
					/>
					</label>
				</form>
				</div>
				<div className="search-books-results">
					<Books showingBooks={showingBooks} />
				</div>
			</div>
		);
  	}
}
