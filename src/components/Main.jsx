import React from "react";
import BookList from "./BookList";
import BookContextProvider from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

class Main extends React.Component{
    render(){

        return(
            <ThemeContext.Consumer>{(contextTheme) => {
                const {isDarkTheme, dark, light} = contextTheme;
                const theme = isDarkTheme ? dark : light;

                return(
                    <main id="main-content" style={{background: theme.bg, color:theme.txt}}>
                        <BookContextProvider>
                            <BookList/>
                        </BookContextProvider>
                    </main>
                )
            }}

            </ThemeContext.Consumer>
        )
    }
}

export default Main