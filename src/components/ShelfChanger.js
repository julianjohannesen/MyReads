import React, { Component } from 'react';

export default class ShelfChanger extends Component {
    
    // handleSelectChange fires when the user commits a change to the select element by clicking on an option or hitting return when an option is highlighted. It calls moveBook (which is in this.props.cb) and pass in the new book and shelf objects
    handleSelectChange = (e) => this.props.cb(this.props.theBook, e.target.value);

    render() {
        return (
            <div className="book-shelf-changer">
                <select 
                    defaultValue={this.props.booksCurrentShelf} 
                    onChange={this.handleSelectChange} 
                >
                    <option value="" disabled>Move To...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
