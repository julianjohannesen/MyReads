import React, { Component } from 'react';
import Books from './Books';

export default class Bookshelf extends Component {
  render() {
    return (
        <div className="bookshelf">
        {console.log("This is the Bookshelf component. Props is ", this.props, "\n and this.props.bookList is ", this.props.bookList)}
            <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <Books 
                    cb={this.props.cb} 
                    showingBooks={this.props.bookList}  
                    theShelf={this.props.theShelf}
                />
            </div>
        </div>
    )
  }
}
