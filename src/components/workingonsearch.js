import React, { Component } from 'react';
import BooksAPI, { search, getAll } from '../BooksAPI'

export default class Workingonsearch extends Component {

	// "books" will be set to the returned value of our API call
	// "bookString" will be set to a stringified, filtered collection of book data
	state = {
		books: ["Uh-oh!"],
		bookString: "Uh-oh!"
	}

	// The search terms
	searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

	// Stringify a selected collection of book data
	stringIt = () => {
		return JSON.stringify(this.state.books, ["title", "subtitle", "authors", "categories"]);
	}

	// Parse the value of stringIt as a string
	parseIt = () => {
		return JSON.parse(this.stringIt());
	}

	// Before we mount
	componentWillMount = () => {
		// iterate over the list of search terms to fetch the entire library using BooksAPI.search
		Promise.all(this.searchTerms.map(v => search(v)))
			// Then combine all of those returned arrays into one large array
			.then(r => [].concat.apply([], r), () => new Error("Concat stage failed"))
			// Then set the state of books to the concatenated array books
			.then(r => this.setState({ books: r }), () => new Error("Set state on books failed"))
			// Then, once the state of books has been set, set the state of bookString to the stringified array containing just title, subtitle, author, and category data
			.then(() => this.setState({ bookString: this.stringIt(this.parseIt()).toLowerCase()}), () => new Error("Set state on bookString failed."));

			getAll().then(r => console.log("This is the result of getAll: ",r))
	}

	render() {
		return (
			<div>
				<p>Hello</p>
				<p>{this.state.bookString}</p>
        	</div>
    )
	}
}

