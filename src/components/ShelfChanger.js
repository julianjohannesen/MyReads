import React, { Component } from 'react';

export default class ShelfChanger extends Component {

    render() {

        return (

            <div className="book-shelf-changer">
                <select onChange={ (e) => {
                    console.log("From Shelf Changer the event target value is ", e.target.value)
                    return this.props.cb(e.target.value, this.props.oldShelf, this.props.theBook);
                }} >
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
        )
    }
}
