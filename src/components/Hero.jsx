import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
}

export default function Hero(){
  return (
    <section id="home" className="py-24 hero-bg rounded-2xl px-6 md:px-12 text-center">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl mx-auto">
        <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Modern, Slick UI for Your Career
        </motion.h1>
        <motion.p variants={item} className="text-lg text-gray-600 mb-8 leading-relaxed">
          I design and build elegant, responsive interfaces using React and Tailwind — clean code, delightful interactions, and accessibility-first.
        </motion.p>
        <motion.div variants={item} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.a whileHover={{scale:1.05}} whileTap={{scale:0.98}} href="#projects" className="px-6 py-3 rounded-lg bg-accent text-white font-medium shadow-lg hover:shadow-xl transition">
            See Projects
          </motion.a>
          <motion.a whileHover={{scale:1.05}} whileTap={{scale:0.98}} href="#contact" className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-medium hover:bg-accent hover:text-white transition">
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
