import React, { Component } from "react";
import { getAll } from "../BooksAPI.js";
import Book from './Book.js';

export default class Books extends Component {

	constructor() {
		super();

		this.books = getAll().then(result => {
			console.log(Object.values(result));
			return Object.values(result);
		});
	}

	render() {

		const booksArray = getAll().then(result => {
			console.log(Object.values(result));
			return Object.values(result);
		});

		return (
			<ol className="books-grid">
				{[{title: "one", authors: ["1", "2"], id: Math.random()},{title: "two", authors: ["1", "2"], id: Math.random()},{title: "three",  authors: ["1", "2"], id: Math.random()}].map( (book, index) => (
					<Book key={index} book={book} />	
				))}	
			</ol>
		)	
	}
}
