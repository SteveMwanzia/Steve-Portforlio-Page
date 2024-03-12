import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {


  return (
    <>
      <div className=' w-full min-h-screen'>
        <NavBar/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
