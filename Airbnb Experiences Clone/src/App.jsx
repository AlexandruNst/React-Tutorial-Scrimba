import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <main>
          <Hero />
          <Card />
        </main>
      </div>
    </div>
  )
}

export default App
