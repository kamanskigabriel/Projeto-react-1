import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  
  return (

    <>
  <Header />
  <List />
  <List /> 
  <Footer />
    <footer id="footer">
      <p> Minha API React - &copy; Todos os direitos resevados a Gabriel Kamanski O</p>
    </footer>
    </>
  )
}
export default App