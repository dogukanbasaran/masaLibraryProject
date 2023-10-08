import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Footer extends React.Component{
  render(){
     return(

      <ThemeContext.Consumer>{(contextTheme) =>{

        const {isDarkTheme, dark, light} = contextTheme;
        const theme = isDarkTheme ? dark : light;

        return (
          <footer className='border h-[120px] flex justify-between px-10' style={{background: theme.bg, color:theme.txt}}>
                      footer
          </footer>
        )

      }}

      </ThemeContext.Consumer>

     )
  }
}
 

export default Footer
