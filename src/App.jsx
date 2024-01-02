import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SliderBar from './components/SliderBar'
import About from './components/About'

function App() {
  

  return (
   <div>
    <Navbar/>
    <Header/>
    <SliderBar/> 
    <About/>
   </div>
  )
}

export default App
