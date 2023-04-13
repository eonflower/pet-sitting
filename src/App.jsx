import { useState } from 'react'
import HexContainer from './components/HexContainer'
import './App.css'
import Nav from './components/Nav'
import logo from "./assets/gentle-circle.png"
import Slider from 'react-slick'
import PetSlider from './components/PetSlider'

function App() {
  

  return (
    <div className="app">
      <Nav />
      <img className="logo" src={logo} alt="gentle critter logo with butterfly" />
      <HexContainer />
      <PetSlider />
    </div>
  )
}

export default App
