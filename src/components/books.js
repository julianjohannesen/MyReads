import React, { Component } from "react";

export default class Books extends Component {
  	render() {
		const books = this.props.showingBooks;
    	console.log("From books.js the value of this.props.showingBooks is: ", books);
		return (
		<ol className="books-grid">
			{books.then( (result) => { 
				result.map( (aBook, index) => (
					<li key={index}>
						<div className="book">
					
						<div className="book-top">
						<div className="book-cover" style={aBook.style} />
						<div className="book-shelf-changer">
							<select>
						<option value="move" disabled>
							Move to...
						</option>
						<option value="currentlyReading">
							Currently Reading
						</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
						</select>
						</div>
					</div>

						<div className="book-title">
						{aBook.title || "No title"}
					</div>

						<div className="book-authors">
						{aBook.author || "No author"}
					</div>
					
						</div>
					</li>
				))
			})
			.catch(new Error())
			}
		</ol>
		);
  	}
}
