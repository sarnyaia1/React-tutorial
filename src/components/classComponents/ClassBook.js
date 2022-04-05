import React from "react";

class ClassBook extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.book);
    }

    render(){
        return(
            <div>
                <p>The title of the book is: {this.props.book.title}</p>
            </div>
        )
    }
}

export default ClassBook;