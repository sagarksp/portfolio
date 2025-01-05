'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-secondary-800 dark:text-secondary-100"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Sagar Kashyap</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6 text-secondary-600 dark:text-secondary-300"
            variants={itemVariants}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
          <motion.p 
            className="text-lg mb-8 text-secondary-600 dark:text-secondary-300"
            variants={itemVariants}
          >
            Crafting beautiful, responsive, and user-friendly web applications with cutting-edge technologies.
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.a
              href="#contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300 mr-4 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-block bg-secondary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2"
          variants={itemVariants}
        >
          <Image
            src="/dp.jpg"
            alt="Sagar Kashyap"
            width={400}
            height={400}
            className="rounded-full mx-auto"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

