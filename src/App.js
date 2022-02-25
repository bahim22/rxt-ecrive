import React from 'react'
import About from './components/About'
import './App.css'
import Contact from './components/Contact'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Software from './components/Software';
import Navbar from './components/Navbar';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Projects />
      <About />
      <Skills />
      <Software />
      <Contact />
    </main>
  )
}

export default App
