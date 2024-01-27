import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import HexContainer from './components/HexContainer'
import './App.css'
import Nav from './components/Nav'
import logo from "./assets/gentle-circle.png"
import Home from './pages/Home'
import About from './pages/About'
import Rates from './pages/Rates'
import Contact from './pages/Contact'

function App() {
  

  return (
    <div className="app hex-container">
      <Nav />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/rates" element={<Rates />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
