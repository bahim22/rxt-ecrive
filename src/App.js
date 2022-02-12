import React from 'react'
import About from './components/About'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Software from './components/Software';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Software />
      <Contact />
    </main>
  )
}

export default App
