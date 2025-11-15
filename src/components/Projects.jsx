import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p=> (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
