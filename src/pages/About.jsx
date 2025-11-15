import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  const skills = ['DigiCert SSL Management', 'Jboss & Apache Tomcat', 'IIS', 'Service Now', 'Middleware Technologies', 'GitHub', 'AWS S3 Hosting']

  return (
    <section id="about" className="py-16">
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}} className="text-2xl font-bold mb-6 text-gray-900">
          About Me
        </motion.h2>
        <motion.p initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.1,duration:0.5}} viewport={{once:true}} className="text-gray-600 mb-6 leading-relaxed">
          Highly inspired and committed person with certified engineering skills, problem-solving, creativity, and strong technical knowledge. I am looking forward to teamwork opportunities as well as handling different projects for your reputed company.
        </motion.p>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, i)=> (
              <motion.div initial={{y:5,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:i*0.05}} viewport={{once:true}} key={skill} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
