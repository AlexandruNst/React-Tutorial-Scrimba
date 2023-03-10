import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map(card =>
    <Card
      key={card.id}
      {...card}
    />
  )
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <main>
          <Hero />
          <div className='cards-list'>
            {cards}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
