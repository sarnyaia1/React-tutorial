import React from "react";

class ClassBook extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.book);
    }

    state = {
        selected: null,
        title: this.props.book.title
    }

    onClickHander = (title) => {
        this.setState({
            selected: title
        }, () => {
            console.log(this.state.selected);
        })
    }

    onClickHander2() {
        console.log("onCLickHandler2");
    }

    render(){

        const {isbn} = this.props.book;

        return(
            <div>
                <p onClick={ () => this.onClickHander(this.state.title) }>The title of the book is: {title}</p>
                <p>This is the ISBN number of the book: {isbn}</p>
            </div>
        )
    }
}

export default ClassBook;