import React, { Component } from "react";
import ShelfChanger from './ShelfChanger';
import noImage from '../icons/no-image-icon-4.gif'

export default class Books extends Component {

	generateBooks = () => {
		// Just spelling things out a bit more by using this holder
		let componentArray;
		// A holder for the books passed in by either ListBooks or Search
		const bookArray = this.props.library;
		// If bookArray is actually an array with members...
		if(Array.isArray(bookArray) && bookArray.length > 0) {
			componentArray = bookArray
				// ... then filter bookArray to find any book that has the right shelf property or any book whose shelf is "search"
				.filter(v => v.shelf === this.props.shelf || this.props.shelf === "search")
				// then map the resulting filtered array and return a new array of jsx blocks for each book, in the process calling ShelfChanger
				.map((book, index) => {
					// bookCover will handle books that don't have a cover image by substituting a default image
					const bookCover = () => {
						if (book.imageLinks && book.imageLinks.thumbnail) {
							return {
								backgroundImage: `url(${book.imageLinks.thumbnail})`,
								backgroundRepeat: 'no-repeat',
								backgroundColor: '#ffffff',
								width: '158px',
								height: '181px'
							}
						} else {
							return {
								backgroundImage: `url(${noImage})`,
								backgroundRepeat: 'no-repeat',
								backgroundColor: '#ffffff',
								width: '158px',
								height: '181px'
							}
						}
					}
					return (
						<li key={index} className="book">
						
							<div className="book-top">
							<div className="book-cover" style={bookCover()} />
							<ShelfChanger 
								key={index}
								cb={this.props.cb}
								oldShelf={this.props.shelf}
								theBook={book}
							/>
							</div>
							
							<div className="book-title">
							{book.title || ""}
							</div>
							
							<div className="book-authors">
							{(book.authors && book.authors.join(", ")) || ""}
							</div>
						</li>
						)
					}
					)
			// Finally return the array of jsx blocks
			return componentArray;
		}
		// If bookArray is not an array, or is an array but is empty then show the message below
		return componentArray = [(<h1>Query returned no results.</h1>)] 
	}
	render(){return this.generateBooks()}
}
		