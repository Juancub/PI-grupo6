import React from 'react'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Searcher from './components/searcher/Searcher'

const App = () => {
  return (
    <div>
      <Header/>
      <Searcher/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App