import React, { Component } from 'react';

export default class ShelfChanger extends Component {

    render() {

        return (

            <div className="book-shelf-changer">
            {/*console.log("the cb is: ", this.props.cb)*/}
                <select onChange={(e)=> this.props.cb(e.target.value, this.props.oldShelf, this.props.theBook)} >
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
