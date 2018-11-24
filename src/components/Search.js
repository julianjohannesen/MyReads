import React, { Component } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import { search } from "../BooksAPI";

export default class Search extends Component {

	searchTerms = ['android', 'art', 'artificial intelligence', 'astronomy', 'austen', 'baseball', 'basketball', 'bhagat', 'biography', 'brief', 'business', 'camus', 'cervantes', 'christie', 'classics', 'comics', 'cook', 'cricket', 'cycling', 'desai', 'design', 'development', 'digital marketing', 'drama', 'drawing', 'dumas', 'education', 'everything', 'fantasy', 'film', 'finance', 'first', 'fitness', 'football', 'future', 'games', 'gandhi', 'homer', 'horror', 'hugo', 'ibsen', 'journey', 'kafka', 'king', 'lahiri', 'larsson', 'learn', 'literary fiction', 'make', 'manage', 'marquez', 'money', 'mystery', 'negotiate', 'painting', 'philosophy', 'photography', 'poetry', 'production', 'programming', 'react', 'redux', 'river', 'robotics', 'rowling', 'satire', 'science fiction', 'shakespeare', 'singh', 'swimming', 'tale', 'thrun', 'time', 'tolstoy', 'travel', 'ultimate', 'virtual reality', 'web development', 'iOS'];

	state = {
		queryFailed: false,
		showingBooks: []
	};

	// handleQuery fires on change to the search form input and 
	handleQuery = (e) => {
		// For each search term in my list, look at it and see if it contains the query string, if it does, then use that search term from the list (not from the query) to do a search
		const termFromList = this.searchTerms.find(v => v.match(e.target.value.toLowerCase()));
		// First test to see if the user has backspaced to an empty string or if the query term cannot be matched, in which case clear the showingBooks array and set the queryFailed flag. If you were to test for the term first and for a non-match in the else statement, it wouldn't work. 
		if(e.target.value === "" || termFromList === undefined) {
			this.setState({showingBooks: [], queryFailed: true});
		} else {
			// Search for books using the query term from the approved list and set the state of showingBooks to the result
			search(termFromList).then(result => {
				this.setState({showingBooks: result});
			});
		}
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<form
						className="search-books-input-wrapper"
						onSubmit={this.handleSubmit}
					>
						<label htmlFor="book-search" className="visually-hidden">
							Book Search
						</label>
						
						<input
							name="book-search"
							onChange={this.handleQuery}
							placeholder="Search by title or author"
							type="text"
						/>
						
					</form>
				</div>
				<ul className="search-books-results books-grid">	
					<Books queryFlag={this.state.queryFailed} shelf="search" library={this.state.showingBooks} cb={this.props.cb}  />
				</ul>
			</div>
		);	
	}
}
		