import React, { useState } from 'react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 glass border-b backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a className="font-semibold text-xl text-accent hover:opacity-90" href="#home">YourName</a>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map(l=> (
            <a key={l.name} href={l.href} className="text-sm text-gray-700 hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent/30 rounded">{l.name}</a>
          ))}
          <a href="#contact" className="ml-2 text-sm px-3 py-2 border rounded-md text-accent">Hire me</a>
        </nav>

        <div className="md:hidden">
          <button onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-menu" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t bg-white/70 glass">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l=> (
              <a key={l.name} href={l.href} onClick={()=>setOpen(false)} className="py-2 text-gray-700 rounded hover:bg-gray-50">{l.name}</a>
            ))}
            <a href="#contact" onClick={()=>setOpen(false)} className="py-2 text-accent font-medium">Hire me</a>
          </div>
        </div>
      )}
    </header>
  )
}
