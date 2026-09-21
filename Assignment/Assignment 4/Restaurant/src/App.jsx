import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

const App = () => {
  return (
    <div style={{border:'2px solid black',padding:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}}>
      <Header />
      <Card />
      <Footer />
    </div>
  )
}

export default App
