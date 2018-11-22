import React, { Component } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import { search } from "../BooksAPI";

export default class Search extends Component {

	searchTerms = ['android', 'art', 'artificial intelligence', 'astronomy', 'austen', 'baseball', 'basketball', 'bhagat', 'biography', 'brief', 'business', 'camus', 'cervantes', 'christie', 'classics', 'comics', 'cook', 'cricket', 'cycling', 'desai', 'design', 'development', 'digital marketing', 'drama', 'drawing', 'dumas', 'education', 'everything', 'fantasy', 'film', 'finance', 'first', 'fitness', 'football', 'future', 'games', 'gandhi', 'homer', 'horror', 'hugo', 'ibsen', 'journey', 'kafka', 'king', 'lahiri', 'larsson', 'learn', 'literary fiction', 'make', 'manage', 'marquez', 'money', 'mystery', 'negotiate', 'painting', 'philosophy', 'photography', 'poetry', 'production', 'programming', 'react', 'redux', 'river', 'robotics', 'rowling', 'satire', 'science fiction', 'shakespeare', 'singh', 'swimming', 'tale', 'thrun', 'time', 'tolstoy', 'travel', 'ultimate', 'virtual reality', 'web development', 'iOS'];

	state = {
		query: "",
		queryFailed: false,
		showingBooks: []
	};

	handleQuery = e => this.setState({query: e.target.value});

	handleSubmit = (e) => {
		e.preventDefault();
		// For each search term in my list, look at it and see if it contains the query string, if it does, then use that search term from the list (not from the query) to do a search
		const termFromList = this.searchTerms.find(v => v.match(this.state.query.toLowerCase()))
		if(termFromList) {
			// Search for books using the query term from the approved list and set the state of showingBooks to the result
			search(termFromList).then(result => {
				this.setState({showingBooks: result});
			});
		} else {
			// Or if the user's query cannot be found in the approved list, set the state of showingBooks to an empty array (to clear any previous searches results) and set queryFlag to true
			this.setState({showingBooks: [], queryFailed: true});
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
							value={this.state.query}
						/>
						
						<input 
							className="visually-hidden" 
							name="submit" 
							type="submit" 
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
		