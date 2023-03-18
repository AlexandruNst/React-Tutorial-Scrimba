import { useEffect, useState } from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false)
    } else {
      setDice(oldDice => oldDice.map(
        die => die.isHeld ? die : generateNewDie()
      ))
    }
  }

  function hold(event, id) {
    event.preventDefault()
    setDice(oldDice => oldDice.map(
      die => die.id === id ? { ...die, isHeld: !die.isHeld } : die
    ))
  }

  useEffect(() => {
    const checkTenzies = dice.every(die => die.isHeld && die.value === dice[0].value)
    checkTenzies ? setTenzies(true) : setTenzies(false)
  }, [dice])

  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      id={die.id}
      number={die.value}
      isHeld={die.isHeld}
      hold={hold}
    />
  )

  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className="dice--wrapper">
        {diceElements}
      </section>
      <button
        className="roll-button"
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}

export default App
