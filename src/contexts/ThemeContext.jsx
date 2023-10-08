import React from "react";
export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component{


    state = {
        isDarkTheme: true,
        dark: {bg: "#222529", txt:"#FFFFFF"},
        light: {bg: "#F8F9FA", txt: "#222529"}
    }

    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme})
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider;