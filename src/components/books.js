import React, { Component } from "react";
import Book from './Book.js';

export default class Books extends Component {
	
	myFunc = () => console.log("The value of this.props.showingBooks is ", this.props.showingBooks);

	render() {

		return (
			<ol className="books-grid">
				{this.myFunc()}
				{/*It was recommended to add the check below, but I'm not sure why */}
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
