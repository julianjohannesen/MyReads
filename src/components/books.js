import React, { Component } from "react";

export default class Books extends Component {
  render() {
    console.log(this.props.showingBooks);
    return (
      <ol className="books-grid">
        {
		  	this.props.showingBooks && Array.isArray(this.props.showingBooks) 
		  	?
		 	this.props.showingBooks.map(
				(aBook, index) => (
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
				)
			)
			: 
			"No Matches"
		}
      </ol>
    );
  }
}
