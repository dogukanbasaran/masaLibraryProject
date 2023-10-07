import React from "react";
import BookList from "./BookList";
import BookContextProvider from "../contexts/BookContext";

class Main extends React.Component{
    render(){
        return <main id="main-content">
            <BookContextProvider>
                <BookList/>
            </BookContextProvider>
        </main>
    }
}

export default Main