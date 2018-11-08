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
		showingBooks: []
	};

	handleQuery = e => this.setState({query: e.target.value});

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit handler fires and query = ", this.state.query);
		if(this.searchTerms.includes(this.state.query.toLowerCase())) {
			search(this.state.query).then(result => {
				console.log("The query was matched with a term in search terms.\nAnd the result of the search was: ", result);
				this.setState({showingBooks: result});
			});
		} else {
			this.setState({showingBooks: "Query Term Not Found"});
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
				<div className="search-books-results">
					<Books 
						cb={this.props.cb}
						showingBooks={this.state.showingBooks}
						theShelf="search" 
					/>
				</div>
			</div>
		);	
	}
}
