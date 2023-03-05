import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className='wrapper'>
            <div className='app-container'>
                <Navbar />
                <Main />
            </div >
        </div>
    )
}



export default App
