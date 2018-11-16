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
        // log some stuff as a check
        console.log("ShelfChanger.js: The onChange event target value is: ", e.target.value);
        // set the state of whichSelected, which, because it's the value of the select attribute, will set the matching option to "selected"
        this.setState({whichSelected: e.target.value});
        // then call moveBook (which is in this.props.cb) and pass in the current shelf, old shelf, and book object
        return this.props.cb(e.target.value, this.props.oldShelf, this.props.theBook);
    }

    generateShelves = () => {
        return this.shelves.map((shelf, index) => {
            // So what I was doing before was telling the shelf generator that if the shelf id on this iteration is the same as the id of the old shelf for this book, then add the "selected" attribute to this shelf. But that's not the preferred way to handle selected options in React. What I'm supposed to do is create a state to represent the selected state of the options and then change that state with setState whenever the onChange event fires. So, I'm going to try that now. It worked! I also moved the handleSelectChange callback out of the element and into it's own method.
            
            //if(shelf.shelf === this.props.oldShelf) {
            //    return (<option key={index} value={shelf.shelf} selected >{shelf.title}</option>);
            //}
            // otherwise just generate the shelf
            return (<option key={index} value={shelf.shelf} >{shelf.title}</option>);
        })
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.whichSelected} onChange={this.handleSelectChange} >
                <option value="">Move To...</option>
                {this.generateShelves()}
                </select>
            </div>
        )
    }
}
