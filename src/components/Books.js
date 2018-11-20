import React, { Component } from "react";
import ShelfChanger from './ShelfChanger';
import noImage from '../icons/no-image-icon-4.gif'

export default class Books extends Component {

	renderBooks = () => {
		return this.props.showingBooks.then(r => r.map((book, index) => {
			const bookCover = () => {
				if(book.imageLinks && book.imageLinks.thumbnail) {
					return {
						backgroundImage:`url(${book.imageLinks.thumbnail})`,
						backgroundRepeat:'no-repeat',
						backgroundColor:'#ffffff',
						width: '128px',
						height: '181px'
					}
				} else {
					return {
						backgroundImage:`url(${noImage})`,
						backgroundRepeat:'no-repeat',
						backgroundColor:'#ffffff',
						width: '128px',
						height: '181px'
					}
				}
			}
			return (
				<li key={index}>
				{console.log("From inside the return statement, book is ", book)}
					<div className="book">
	
						<div className="book-top">
							<div className="book-cover" style={bookCover()} />
							<ShelfChanger 
								cb={this.props.cb} 
								oldShelf={this.props.theShelf}
								theBook={book.id}  
							/>
						</div>
	
						<div className="book-title">
							{book.title || ""}
						</div>
	
						<div className="book-authors">
							{(book.authors && book.authors.join(", ")) || ""}
						</div>
	
					</div>
				</li>
			)
		}))
	}

	render() {
		return (
			<ol className="books-grid">
				{console.log("When you call this.renderBooks you get ", this.renderBooks())}
				{this.renderBooks()}
			</ol>
		)
	}
}
