import React, { Component } from 'react';
import { generate } from 'shortid';
import ShelfChanger from './ShelfChanger';
import noImage from '../icons/add.svg'


export default class Books extends Component {
	
	render(){
		const shelfBooks = this.props.shelfBooks;
		return Array.isArray(shelfBooks) && shelfBooks.length > 0 
		? 
		shelfBooks.map(book => (
			<li key={generate()} className="book">
			<div className="book-top">
			<div 
			className="book-cover" 
					style={{
						backgroundImage: book.imageLinks && book.imageLinks.thumbnail ? `url(${book.imageLinks.thumbnail})` : `url(${noImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundColor: '#ffffff',
						width: '158px',
						height: '181px'
					}} 
					/>
					<ShelfChanger 
					cb={this.props.cb}
					key={generate()}
					booksCurrentShelf={book.shelf ? book.shelf : "none"}
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
		)) 
		:
		null
	}
}
		