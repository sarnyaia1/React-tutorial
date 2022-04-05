import React from "react";
import ClassBook from "./ClassBook";

class BookList extends React.Component{

    state = {
        category: "fantasy",
        books: [
            {
                title: "Avatar",
                isbn: "abc123"
            },
            {
                title: "Star Wars",
                isbn: "xyz123"
            },
            {
                title: "Lord of the Rings",
                isbn: "xbc333"
            }

        ]
    }

    // Lifecycle method 1
    constructor(){
        super();
        console.log("test constructor");
    }

     // Lifecycle method 2
     componentWillUnmount(){
         console.log("test componentWillMount");
     }

     // Lifecycle method 4
     componentDidMount(){
        console.log("test componentDidMount");
    }

     // Lifecycle method 3
    render() {
        console.log("test render");
        return(
            <div>
                <p>This is a BookList</p>
                <p>This is a category state of the BookList: {this.state.category}</p>
                <div>
                    {this.state.books.map( (book, index) => (<ClassBook book={book} key={index}/>) )}
                </div>
            </div>
        )
    }
}

export default BookList;