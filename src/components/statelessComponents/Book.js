import React from "react";


// Component in component
const BookTitle = (props) => {
    return <p>{props.children}</p>
}


const Book = (props) => {
    return(
        <div>
            <h4>Way 1</h4>
            <p>The title prop of the first book component is: {props.title} </p>
            <h4>Way 2</h4>
            <p><BookTitle>The title prop of the first book component is: {props.title}</BookTitle></p>
        </div>
    )
}

export default Book;