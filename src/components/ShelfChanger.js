import React, { Component } from 'react';

export default class ShelfChanger extends Component {
    
    // The shelf that is currently selected for this book. oldShelf is passed down by the Books component, along with the book object and the callback. Books gets oldShelf from either ListBooks or Search.
    state = {
        whichSelected: this.props.oldShelf,
    };

    // I needed the shelf array again, but it's easier to just recreate it here
    shelves = [
        {
            shelf: "currentlyReading",
            title: "Currently Reading"
        },
        {
            shelf: "wantToRead",
            title: "Want to Read"
        },
        {
            shelf: "read",
            title: "Read"
        },
        {
            shelf: "none",
            title: "None"
        }
    ]
    
    // handleSelectChange fires when the user commits a change to the select element by clicking on an option or hitting return when an option is highlighted. 
    handleSelectChange = (e) => {
        // This was an attempt to overcome a bug noted below
        if(e.target.tagName === "SELECT"){
            // set the state of whichSelected, which, because it's the value of the select attribute, will set the matching option to "selected"
            this.setState({whichSelected: e.target.value});
            // then call moveBook (which is in this.props.cb) and pass in the new shelf, old shelf, and book object
            return this.props.cb(e.target.value, this.props.oldShelf, this.props.theBook);
        }
    }

    // generateShelves will generate the shelf options in the select dropdown
    generateShelves = () => {
        // Map the shelves in the shelf array above and generate an option element. The option value is the shelf id from the shelf array
        return this.shelves.map((shelf, index) => (
            <option key={index} value={shelf.shelf} >
                {shelf.title}
            </option>
        ));
    }

    render() {
        return (
            <div className="book-shelf-changer">
                {/* In React, the default selected option is set by setting the select element's value to the value of the selected option. When the user _commits_ a change to the select element's value, the onchange event fires.  An apparent bug on Windows is that in Chrome and Firefox at least, once an option is selected with the up or down arrows keys, clicking _anywhere_ on the page will commit the change. */}
                <select value={this.state.whichSelected} onChange={this.handleSelectChange} >
                    <option value="" disabled>Move To...</option>
                    {this.generateShelves()}
                </select>
            </div>
        )
    }
}
