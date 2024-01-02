import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SliderBar from './components/SliderBar'

function App() {
  

  return (
   <div>
    <Navbar/>
    <Header/>
    <SliderBar/> 
   </div>
  )
}

export default App
