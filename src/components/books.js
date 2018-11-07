import React, { Component } from "react";
import Book from './Book.js';

export default class Books extends Component {
	render() {

		return (
			<ol className="books-grid">
				{this.props.showingBooks.map( (book, index) => (
					<Book 
						key={index} 
						theShelf={this.props.theShelf} 
						theBook={book}  
						cb={this.props.cb} />	
				))}	
			</ol>
		)
	}
}
