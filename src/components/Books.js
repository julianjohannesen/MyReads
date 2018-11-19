import React, { Component } from "react";
import Book from './Book.js';

export default class Books extends Component {

	renderBooks = () => {
		const books = this.props.showingBooks;
		books.then(r => {
			// if(Array.isArray(r) && r.length > 0) {
			return r.map( (book, index) => {
				console.log("From the Books component, each book is ", book)
				return (
					<Book 
						key={index} 
						theShelf={this.props.theShelf} 
						theBook={book}  
						cb={this.props.cb} 
					/>	
				)
			}
			);
		// } else if(typeof books === "string") {
		// 	return (<li><h2>{books}</h2></li>)
		// }
		})
	}
	
	render() {
		return (
			<ol className="books-grid">
				{this.renderBooks()}	
			</ol>
		)
	}
}
