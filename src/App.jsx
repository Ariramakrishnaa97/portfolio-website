import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen site-bg tech-grid text-gray-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
