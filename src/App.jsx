import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'

function App() {
  return (
    <>
  <Header />
    <section>
      <h2 id="exemplo-h2">seção das listas</h2>
    
    
      <h3>Lista não ordenada</h3>
      <ul id="ul">
        <li>Pão</li>
        <li>Batata</li>
        <li>Chocolate</li>
      </ul>
      <h3>Lista ordenada</h3>
      <ul>
        <li>Hot wheels</li>
        <li>Digimon</li>
        <li>POKÉMON</li>
      </ul>    
    </section>
    <footer id="footer">
      <p> Minha API React - &copy; Todos os direitos resevados a Gabriel Kamanski O</p>
    </footer>
    </>
  )
}
export default App