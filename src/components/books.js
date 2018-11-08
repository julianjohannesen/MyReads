import React, { Component } from "react";
import Book from './Book.js';

export default class Books extends Component {

	renderBooks = () => {
		const books = this.props.showingBooks;
		console.log(Array.isArray(books));
		if(Array.isArray(books) && books.length > 0) {
			books.map( (book, index) => {
				console.log('The book is', book, ' and the index is ', index);
				return (
					<Book 
						key={index} 
						theShelf={this.props.theShelf} 
						theBook={book}  
						cb={this.props.cb} 
					/>	
				)
			});
		} else if(typeof books === "string") {
			console.log(books);
			return (<li><h2>{books}</h2></li>)
		}
	}
	
	render() {
		return (
			<ol className="books-grid">
				{this.renderBooks()}	
			</ol>
		)
	}
}
