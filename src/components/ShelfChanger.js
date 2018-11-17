import React, { Component } from 'react';

export default class ShelfChanger extends Component {
    
    state = {
        whichSelected: this.props.oldShelf,
    };

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
    
    handleSelectChange = (e) => {
        if(e.target.tagName === "SELECT"){
            // set the state of whichSelected, which, because it's the value of the select attribute, will set the matching option to "selected"
            this.setState({whichSelected: e.target.value});
            // then call moveBook (which is in this.props.cb) and pass in the current shelf, old shelf, and book object
            return this.props.cb(e.target.value, this.props.oldShelf, this.props.theBook);
        }
    }

    generateShelves = () => {
        return this.shelves.map((shelf, index) => (
            <option key={index} value={shelf.shelf} >
                {shelf.title}
            </option>
        ));
    }

    render() {
        return (
            <div className="book-shelf-changer">
                {/* When the user _commits_ a change to the select element's value, the onchange event fires.  */}
                <select value={this.state.whichSelected} onChange={this.handleSelectChange} >
                <option value="">Move To...</option>
                {this.generateShelves()}
                </select>
            </div>
        )
    }
}
