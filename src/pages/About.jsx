import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  const skills = ['Linux Server', 'Windows Server', 'Troubleshooting', 'Service Now', 'ITSM', 'Solution Architect', 'Lambda, EC2', 'Terraform Basics', 'DigiCert SSL Certificate Management', 'S3 bucket Hosting', 'IIS', 'Apache Tomcat', 'Jboss, Jboss EAP']

  return (
    <section id="about" className="py-16">
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}} className="text-2xl font-bold mb-6 text-gray-100">
          About Me
        </motion.h2>
        <motion.p initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.1,duration:0.5}} viewport={{once:true}} className="text-gray-300 mb-6 leading-relaxed">
          Highly inspired and committed person with certified engineering skills, problem-solving, creativity, and strong technical knowledge. I am looking forward to teamwork opportunities as well as handling different projects for your reputed company.
        </motion.p>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, i)=> (
              <motion.div initial={{y:5,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:i*0.05}} viewport={{once:true}} key={skill} className="px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium text-gray-200">
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Education Details</h3>
          <div className="space-y-4">
            <motion.div initial={{y:8,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}} className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-100">Bharathiyar College of Engineering and Technology</h4>
              <p className="text-gray-300 text-sm">B.Tech, Mechanical Engineering | Jul 2015 – Apr 2019 | Grade: 68%</p>
            </motion.div>

            <motion.div initial={{y:8,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.08,duration:0.5}} viewport={{once:true}} className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-100">Annamalai University</h4>
              <p className="text-gray-300 text-sm">Diploma of Education, Industrial Safety Technology/Technician | 2020 | Grade: 79.40%</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
