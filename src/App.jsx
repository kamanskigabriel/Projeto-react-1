import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'

function App() {
  
  return (

  <>

  <Header />
  <Routes>
    <Route path="/"element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer />

    
 
    
    </>
  )
}
export default App