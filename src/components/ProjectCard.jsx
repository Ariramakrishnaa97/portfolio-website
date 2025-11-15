import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({project}){
  return (
    <motion.div whileHover={{y:-4}} transition={{type:'spring',stiffness:300,damping:20}} className="p-6 card-dark rounded-lg shadow hover:shadow-xl transition">
      {project.image && (
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-lg font-semibold mb-2 text-gray-100">{project.title}</h3>
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(t=> (
          <span key={t} className="text-xs px-3 py-1 bg-gradient-to-r from-accent/10 to-primary/10 text-accent rounded-full font-medium">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <motion.a whileHover={{x:4}} href={project.href} className="inline-flex text-sm font-medium text-accent hover:text-primary transition">
          View project <span className="ml-2">→</span>
        </motion.a>
        {project.repo && (
          <a href={project.repo} className="text-sm text-gray-400">Repo</a>
        )}
      </div>
    </motion.div>
  )
}
