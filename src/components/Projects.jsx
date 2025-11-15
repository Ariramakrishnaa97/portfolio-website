import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import { container } from '../motionVariants'

export default function Projects(){
  return (
    <motion.section id="projects" className="py-16" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-100">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i)=> (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
