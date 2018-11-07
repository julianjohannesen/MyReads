import React, { Component } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import { search } from "../BooksAPI";

export default class Search extends Component {

	constructor(){
		super();
		this.searchTerms = ['android', 'art', 'artificial intelligence', 'astronomy', 'austen', 'baseball', 'basketball', 'bhagat', 'biography', 'brief', 'business', 'camus', 'cervantes', 'christie', 'classics', 'comics', 'cook', 'cricket', 'cycling', 'desai', 'design', 'development', 'digital marketing', 'drama', 'drawing', 'dumas', 'education', 'everything', 'fantasy', 'film', 'finance', 'first', 'fitness', 'football', 'future', 'games', 'gandhi', 'homer', 'horror', 'hugo', 'ibsen', 'journey', 'kafka', 'king', 'lahiri', 'larsson', 'learn', 'literary fiction', 'make', 'manage', 'marquez', 'money', 'mystery', 'negotiate', 'painting', 'philosophy', 'photography', 'poetry', 'production', 'programming', 'react', 'redux', 'river', 'robotics', 'rowling', 'ratire', 'science fiction', 'shakespeare', 'singh', 'swimming', 'tale', 'thrun', 'time', 'tolstoy', 'travel', 'ultimate', 'virtual reality', 'web development', 'iOS'];
	}

	state = {
		query: "",
		showingBooks: [{title: "No results found."}]
	};

	handleQuery = e => this.setState({query: e.target.value});

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit handler fires and query = ", this.state.query);
		if(this.searchTerms.includes(this.state.query.toLowerCase())) {
			const searchResults = search(this.state.query).then(result => result).then(result => result);
			console.log("The query was matched with a term in search terms.\nAnd the result of the search was: ", searchResults);
			this.setState({showingBooks: [searchResults]});
			return;
		}
		return [{title: "No results found."}];
	};

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
					
					<input type="submit" name="submit" className="visually-hidden" />
				</form>
			</div>
			<div className="search-books-results">
				<Books showingBooks={this.state.showingBooks} />
			</div>
		</div>
	);	
}
}
