import React, { Component } from "react";
import { getAll } from "../BooksAPI.js";

export default class Books extends Component {

  	render() {
		return (
			<ol className="books-grid">
				{getAll().then(result => (
					<li key={Math.random()}>
						<div className="book">
					
							<div className="book-top">
								<div className="book-cover" style={result.style} />
								<div className="book-shelf-changer">
									<select>
										<option value="move" disabled>
											Move to...
										</option>
										<option value="currentlyReading">
											Currently Reading
										</option>
										<option value="wantToRead">
											Want to Read
										</option>
										<option value="read">
											Read
										</option>
										<option value="none">
											None
										</option>
									</select>
								</div>
							</div>

							<div className="book-title">
								{result.title || "No title"}
							</div>

							<div className="book-authors">
								{result.author || "No author"}
							</div>
							
						</div>
					</li>		
				))}
		
			</ol>
		)
	}
}
