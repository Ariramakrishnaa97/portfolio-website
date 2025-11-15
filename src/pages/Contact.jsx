import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.15,duration:0.5}} viewport={{once:true}} className="flex flex-col md:flex-row gap-4">
          <a href="mailto:aariramakrishna@gmail.com" className="px-6 py-3 bg-accent text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition text-center">
            Email Me
          </a>
          <a href="#" className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition text-center">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
