import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Projects, Writing, Awards, Creative, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Awards />
        <Creative />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Krishnam Goel — All rights reserved.
      </footer>
    </div>
  )
}

export default App
