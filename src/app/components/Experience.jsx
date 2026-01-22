'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
   {
    title: "Software Developer",
    company: "Vaaan Infra Pvt. Ltd.",
    period: "2025 - Present",
    description: "Lead development of cutting-edge web applications using C#, .NET, SVN, and MySql."
  },
  {
    title: "Full Stack Developer",
    company: "Wibro Solutions Pvt. Ltd.",
    period: "2024 - Present",
    description: "Lead development of cutting-edge web applications using Next.js, React, Node.js, and MongoDb."
  },
  {
    title: "Full-Time Intern",
    company: "Ducat IT School.",
    period: "feb-2024 - nov-2024",
    description: "Developed and maintained multiple live projects."
  },
  {
    title: "Intern",
    company: "Bhagwati Pvt ltd.",
    period: "jan-2023 - may-2023",
    description: "Assisted in the development of responsive websites. Gained expertise in HTML, CSS, JavaScript, and various frontend frameworks."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-classic-lavender bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-700 dark:text-primary-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Professional Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="mb-12 relative pl-8 border-l-2 border-primary-400 dark:border-primary-600"
              variants={itemVariants}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 dark:bg-primary-400 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white dark:text-primary-900" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-1">{exp.title}</h3>
              <p className="text-accent-700 dark:text-accent-300 mb-2">{exp.company}</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {exp.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
