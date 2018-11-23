import React, { Component } from 'react';

export default class ShelfChanger extends Component {
    
    // The shelf that is currently selected for this book. oldShelf is passed down by the Books component, along with the book object and the callback. Books gets oldShelf from either ListBooks or Search.
    state = {
        whichSelected: this.props.oldShelf,
    };

    // handleSelectChange fires when the user commits a change to the select element by clicking on an option or hitting return when an option is highlighted. 
    handleSelectChange = (e) => { 
        // set the state of whichSelected, which, because it's the value of the select attribute, will set the matching option to "selected"
        this.setState({whichSelected: e.target.value});
        // then call moveBook (which is in this.props.cb) and pass in the new shelf, old shelf, and book object
        return this.props.cb(this.props.theBook, e.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select 
                value={this.state.whichSelected} 
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
