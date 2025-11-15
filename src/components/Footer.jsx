import React from 'react'

export default function Footer(){
  const links = [
    { name: 'GitHub', href: 'https://github.com/Ariramakrishnaa97' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ariramakrishnaa-a-009395170/?trk=opento_sprofile_details' },
    { name: 'Twitter', href: '#' }
  ]

  return (
    <footer className="border-t mt-16 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h3 className="font-semibold text-gray-900">Ariramakrishnaa.A</h3>
            <p className="text-sm text-gray-600 mt-1">Full-Stack Developer & UI Designer</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {links.map(l=> (
              <a key={l.name} href={l.href} className="text-sm text-gray-600 hover:text-accent transition">{l.name}</a>
            ))}
          </div>
        </div>
        <div className="border-t pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ariramakrishnaa.A — Built with React, Tailwind & Framer Motion.</p>
          <p className="mt-1">Ready to deploy on Netlify. See README for instructions.</p>
        </div>
      </div>
    </footer>
  )
}
