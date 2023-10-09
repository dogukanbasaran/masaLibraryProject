import React from "react";
export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component{


    state = {
        isDarkTheme: true,
        dark: {bg: "bg-slate-800", txt:"text-white"},
        light: {bg: "bg-slate-200", txt: "text-black"}
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