import React from "react";
import BookList from "./components/classComponents/BookList";
import Book from "./components/statelessComponents/Book";

function App(){
    return(
        <div>
            <h1>Let's start React Tutorial!!</h1>
            <div>
                <h2>This is a stateless component!</h2>
                <Book title="Avatar"/>
                <Book title="Lord of the Rings"/>
                <Book title="Star Wars"/>
            </div>
            <div>
                <h2>This is a Class component!</h2>
                <BookList />
            </div>
        </div>
    )
}

export default App;