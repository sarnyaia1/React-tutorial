import React from "react";

const BookTitle = (props) => {
    return (
        <h2 onClick={ props.onClickFunc(props.title)}>
            This is the title of the book: {props.title}
        </h2>
    )
}

export default BookTitle;