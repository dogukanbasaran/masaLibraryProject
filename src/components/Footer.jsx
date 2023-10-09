import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Footer extends React.Component{
  render(){
     return(

      <ThemeContext.Consumer>{(contextTheme) =>{

        const {isDarkTheme, dark, light} = contextTheme;
        const theme = isDarkTheme ? dark : light;

        return (
          <footer className={`border h-[120px] flex justify-between px-10 ${theme.bg} ${theme.txt}`}>
                      <div className='container flex flex-col md:flex-row justify-end'>
                          <div className='basis-1/3 flex justify-center items-center border'>Mini Logo</div>
                          <div className='basis-1/3 flex justify-center items-center border'>Footer Menu</div>
                          <div className='basis-1/3 flex justify-center items-center border'>Sosyal Medya</div>
                      </div>
          </footer>
        )

      }}

      </ThemeContext.Consumer>

     )
  }
}
 

export default Footer
