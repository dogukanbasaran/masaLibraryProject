import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ThemeContextProvider from './contexts/ThemeContext'


class App extends React.Component {
  render(){

    return (
       <body>
        <ThemeContextProvider>
          <Header/>
          <Main/>
          <Footer/>
        </ThemeContextProvider>
       </body>

    )
   

  }
  
}

export default App
