import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, container } from '../motionVariants'

export default function Achievements(){
  const achievements = [
    {
      title: 'Recognized by CIS Service Delivery Management Lead',
      date: 'Nov 2025',
      description: 'Outstanding work during ARPEGES 3 – PROD to PRE-PROD Data Refresh activity (Oct 2025)'
    },
    {
      title: 'Certified AWS Solution Architect',
      date: '',
      description: ''
    }
  ]

  return (
    <section id="achievements" className="py-16">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{once:true}} className="max-w-4xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12 text-gray-100">
          🏆 Achievements & Recognition
        </motion.h2>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="p-6 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/40 transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-100">{achievement.title}</h3>
                {achievement.date && <span className="text-sm px-3 py-1 rounded-full bg-accent/20 text-accent font-medium">{achievement.date}</span>}
              </div>
              {achievement.description && <p className="text-gray-300 leading-relaxed">{achievement.description}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
