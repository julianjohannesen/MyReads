import React, { Component } from "react";
import ShelfChanger from './ShelfChanger';
import noImage from '../icons/no-image-icon-4.gif'

export default class Books extends Component {

	renderBooks = () => {
		console.log("In Books.js in renderBooks() props is: ", this.props);
		
		let componentArray;
		const bookArray = this.props.library;
		if(Array.isArray(bookArray) && bookArray.length > 0) {
			console.log("Now I'm in Books.js. Should be just one shelf: ", this.props.library);

			componentArray = bookArray
				.filter(v => v.shelf === this.props.shelf || this.props.shelf === "search")
				.map((book, index) => {
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
			return componentArray;
		}
		return componentArray = [(<h1>Query returned no results.</h1>)] 
			
	}
			render(){return this.renderBooks()}
		}
		