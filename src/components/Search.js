import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generate } from 'shortid';
import Books from "./Books";
import { search } from "../BooksAPI";

export default class Search extends Component {

	searchTerms = ['android', 'art', 'artificial intelligence', 'astronomy', 'austen', 'baseball', 'basketball', 'bhagat', 'biography', 'brief', 'business', 'camus', 'cervantes', 'christie', 'classics', 'comics', 'cook', 'cricket', 'cycling', 'desai', 'design', 'development', 'digital marketing', 'drama', 'drawing', 'dumas', 'education', 'everything', 'fantasy', 'film', 'finance', 'first', 'fitness', 'football', 'future', 'games', 'gandhi', 'homer', 'horror', 'hugo', 'ibsen', 'journey', 'kafka', 'king', 'lahiri', 'larsson', 'learn', 'literary fiction', 'make', 'manage', 'marquez', 'money', 'mystery', 'negotiate', 'painting', 'philosophy', 'photography', 'poetry', 'production', 'programming', 'react', 'redux', 'river', 'robotics', 'rowling', 'satire', 'science fiction', 'shakespeare', 'singh', 'swimming', 'tale', 'thrun', 'time', 'tolstoy', 'travel', 'ultimate', 'virtual reality', 'web development', 'iOS'];

	messages = {
		greeting:(<h1 style={{"margin":"2em","textAlign":"center"}}>Search for Books to Add to Your Shelves</h1>),
		noMatch:(<h1 style={{"margin":"2em", "textAlign":"center"}}>No match found.</h1>),
	}

	state = {
		message: this.messages.greeting,
		showingBooks: []
	}
	
	// handleQuery fires on change to the search form input and attempts to find the query term in the approved list of terms. If there isn't a query term or it's undefined, it sets the state of showingBooks to an empty array, otherwise it uses the matched term to search for books matching that term and sets the state of showingBooks to the resulting array.
	handleQuery = (e) => {
		e.preventDefault();
		// For each search term in my list, look at it and see if it contains the query string, if it does, then use that search term from the list (not from the query) to do a search
		const termFromList = this.searchTerms.find(v => v.match(e.target.value.toLowerCase()));
		// First test to see if the user has backspaced to an empty string (ie is the input value not truthy) or if the query term cannot be matched (ie the input the value is truthy, but the search term match is not truthy), in which case clear the showingBooks array and set the message. If the query term exists, then search for the books matching that term, get their shelf value, and set showingBooks to show them.
		if(!e.target.value) {
			this.setState({showingBooks: [], message: this.messages.greeting});
		} else if(e.target.value && !termFromList) {
			this.setState({showingBooks: [], message: this.messages.noMatch});
		} else if(e.target.value && termFromList){
			search(termFromList).then(result => {
				// Map over the search result array, and for each found book ...
				const resultWithShelf = result.map(foundBook => {
					// Flatten this.props.library into an array of book objects 
					const library = [].concat.apply([], Object.values(this.props.library))
					// For each book in the library, see if that library book's ID matches the ID of the book from the search results that we're looking at right now. If so, set the shelf of the searched book to the library book's shelf.
					library.forEach(book => foundBook.id === book.id ? foundBook.shelf = book.shelf : !foundBook.shelf ? foundBook.shelf = "none" : null );
					// Return the searched for book with the possible new shelf property.
					return foundBook;
				});
				this.setState({showingBooks: resultWithShelf});
				});
		} else {
			new Error();
		}
	}

	render() {
		
		return (
			<div className="search-books">
				<div className="search-books-bar" >
					<Link to="/" className="close-search">
						Close
					</Link>
					<form className="search-books-input-wrapper">
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
				<div className="message">
					{this.state.message}
				</div>
				<ul className="search-books-results books-grid">	
					<Books 
						cb={this.props.cb} 
						key={generate()} 
						shelfBooks={this.state.showingBooks} 
					/>
				</ul>
			</div>
		);	
	}
}
		