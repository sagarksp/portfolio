'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDb', level: 65 },
  { name: 'C++', level: 45 },
  { name: 'Nextjs', level: 90 },
  
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20  bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary-800 dark:text-secondary-100"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-secondary-700 dark:text-secondary-300">{skill.name}</span>
                <span className="text-secondary-600 dark:text-secondary-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary-200 rounded-full h-2.5 dark:bg-secondary-700 overflow-hidden">
                <motion.div
                  className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="0"
                    vectorEffect="non-scaling-stroke"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="text-primary-400 dark:text-primary-600 opacity-50"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-4">
            In addition to these core skills, I'm always learning and exploring new technologies to stay at the forefront of web development.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

