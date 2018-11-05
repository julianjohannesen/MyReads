import React, { Component } from 'react';
import ListBooks from './ListBooks.js';

export default class ShelfChanger extends Component {

    render() {

        return (

            <div className="book-shelf-changer">
                <select onChange={this.props.cb} >
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
