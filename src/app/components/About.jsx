'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-800 dark:text-secondary-100"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-lg mb-6 text-secondary-600 dark:text-secondary-300"
            variants={itemVariants}
          >
            Hello! I'm a passionate full stack developer with over 5 years of experience in creating robust and scalable web applications. My journey in the world of programming started with a fascination for turning ideas into reality through code.
          </motion.p>
          <motion.p
            className="text-lg mb-6 text-secondary-600 dark:text-secondary-300"
            variants={itemVariants}
          >
            I specialize in JavaScript ecosystems, with expertise in React, Node.js, and modern frameworks like Next.js. I'm also well-versed in database technologies, RESTful APIs, and cloud services. My approach to development is not just about writing code, but about crafting solutions that deliver real value to users and businesses.
          </motion.p>
          <motion.p
            className="text-lg mb-6 text-secondary-600 dark:text-secondary-300"
            variants={itemVariants}
          >
            Throughout my career, I've had the opportunityThroughout my career, I've had the opportunity to work on a diverse range of projects, from e-commerce platforms to data visualization tools. I thrive in collaborative environments and enjoy tackling complex problems with innovative solutions.
          </motion.p>
          <motion.p
            className="text-lg text-secondary-600 dark:text-secondary-300"
            variants={itemVariants}
          >
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups. I'm always excited about learning new things and pushing the boundaries of what's possible in web development.
          </motion.p>
          <motion.div
            className="mt-8 text-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

