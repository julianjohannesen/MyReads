import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generate } from 'shortid';
import DebounceInput from 'react-debounce-input'
import Books from "./Books";
import { search } from "../BooksAPI";

export default class Search extends Component {

	//Previously, I created a search function that matched against only the approved list of search terms. I decided to create a better search experience for the user by searching for and returning all of the books in the library, and then generating a string containing title, subtitle, author, and category words, then matching against that. In the real world, I'd implement a better search on the backend, and would not want to be in the position of fetching and searching through thousands of books, but in our case it made sense.

	// Because I search for and return everything, I make all of my API calls at page load and then filter the results for the search. Adding debounce helped speed things up a bit.

	//A greeting or error message for visitors
	messages = {
		greeting: (<h1 style={{ "marginTop": "10%", "textAlign": "center" }}>Search for Books to Add to Your Shelves</h1>),
		noMatch: (<h1 style={{ "marginTop": "10%", "textAlign": "center" }}>The search returned no results.</h1>),
	}

	// The search terms
	searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

	// States for all books, for messages, and for books currently displayed
	state = {
		books: [],
		message: this.messages.greeting,
		showingBooks: []
	}

	// Before we mount
	componentWillMount = () => {
		// iterate over the list of search terms to fetch the entire library using BooksAPI.search
		Promise.all(this.searchTerms.map(term => search(term)))
			// Then combine all of those returned arrays into one large array
			.then(result => [].concat.apply([], result), () => new Error("Concat stage failed"))
			// Then set the state of books to the concatenated array books
			.then(result => {
				// on success, map over each book and for that book, and...
				const withShelves = result.map(book => {
					//...iterate over our shelved books from this.props.library
					this.props.library.forEach(shelvedBook => {
						// If the ids of the two books match, assign book a shelf from the shelved books. Books that aren't yet on a shelf will be assigned "none" in the Books component.
						if (book.id === shelvedBook.id) {
							book.shelf = shelvedBook.shelf;
						}
					});
					// Return the shelved book
					return book;
				});
				// Finally set state on books to books with shelves added 
				this.setState({ books: withShelves })
			},
				// on failure
				() => new Error("Assigning shelves and setting state on books failed")
			);
	}

	// handleQuery fires on change to the search form input and attempts to find the query term. If there isn't a query term, it sets the state of showingBooks to an empty array, otherwise it uses the term to filter for books matching that term and sets the state of showingBooks to the resulting array.
	handleQuery = (e) => {
		// Get the query string
		const queryString = e.target.value;

		// Get the query term(s) and store them in an array
		const queryArray = queryString.match(new RegExp(/(\w+)/, 'ig')) || [];

		// A holder for our filtered books
		let filteredBooks = [];
		
		// searchString builds a string comprised of a book's title, subtitle, author, and category fields
		const _searchString = (book) =>  `
			${book.title || ""} 
			${book.subtitle || ""}  
			${book.authors && book.authors[0] ? book.authors[0] : ""}  
			${book.authors && book.authors[1] ? book.authors[1] : ""} 
			${book.categories && book.categories[0] ? book.categories[0] : ""}  
			${book.categories && book.categories[1] ? book.categories[1] : ""}`;
		
		// filterThem filters a collection of books using a search string comprised of various fields found in each book object and an array of query terms to be matched against that string. It calls itself once for each query term in the array, performing a new filter on the previously filtered results, narrowing the search field on each call.
		const _filterThem = (someBooks, aQueryArray) => {
			if(aQueryArray.length === 0) {
				console.log("The filtered books are: ", filteredBooks);
				return filteredBooks;
			} else {
				filteredBooks = someBooks.filter(book => {
					return _searchString(book).match(new RegExp(aQueryArray[0], 'i'));
				})
				aQueryArray.splice(0,1);
				_filterThem(filteredBooks, aQueryArray);
			}
		}

		// For each query term in the query array, filter the books down to books whose search string contains the query term, performing the filter on smaller and smaller sets of filtered books
		_filterThem(this.state.books, queryArray);

		// If the search query is empty, show no books and show the greeting message
		if (!queryString) {
			this.setState({ showingBooks: [], message: this.messages.greeting });
		// If the search query exists and filtered books is empty, show no books and show the failure message
		} else if (queryString && filteredBooks.length === 0) {
			this.setState({ showingBooks: [], message: this.messages.noMatch });
		// If the search query exists and filtered books contains book(s), show the books
		} else if (queryString && filteredBooks.length > 0) {
			this.setState({ showingBooks: filteredBooks, message: this.messages.greeting });
		}
	}

	render() {

		return (
			<div className="search-books">
				<div className="search-books-bar" >
					<Link to="/" className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<label htmlFor="book-search" className="visually-hidden">
							Book Search
						</label>

						<DebounceInput
							minLength={2}
							debounceTimeout={750}
							name="book-search"
							onChange={this.handleQuery}
							placeholder="Search by title or author"
							type="text"
						/>

					</div>
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
