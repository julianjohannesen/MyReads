import React, { Component } from "react";
import Book from './Book.js';

export default class Books extends Component {

	render() {

		// const booksArray = getAll().then(result => {
		// 	console.log(Object.values(result));
		// 	return Object.values(result);
		// });

		return (
			<ol className="books-grid">
				{this.props.showingBooks.map( (book, index) => (
					<Book key={index} book={book}  cb={this.props.cb} />	
				))}	
			</ol>
		)
	}
}
