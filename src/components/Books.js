import React, { Component } from "react";
import Book from './Book.js';

export default class Books extends Component {

	renderBooks = () => {
		const books = this.props.showingBooks;
		if(Array.isArray(books) && books.length > 0) {
			return books.map( (book, index) => {
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
