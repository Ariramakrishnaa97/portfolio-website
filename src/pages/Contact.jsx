import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}} className="text-2xl font-bold mb-4 text-gray-900">
          Let's Work Together
        </motion.h2>
        <motion.p initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.1,duration:0.5}} viewport={{once:true}} className="text-gray-600 mb-8 leading-relaxed">
          I'm available for freelance projects and full-time roles. Feel free to reach out — I'd love to chat about your next project.
        </motion.p>

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
