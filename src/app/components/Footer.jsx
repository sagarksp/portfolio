'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-secondary-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-8 md:mb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-2">Sagar Kashyap</h3>
            <p className="text-secondary-300">Full Stack Developer</p>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8"
            variants={itemVariants}
          >
            <a href="#about" className="hover:text-primary-400 transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-primary-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors duration-300">Contact</a>
          </motion.div>
          <motion.div
            className="flex space-x-6 mt-8 md:mt-0"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/sagarksp/sagarksp' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-kashyap-43327023a/' },
              { icon: Twitter, href: '#' },
              { icon: Mail, href: 'mailto:kspsagar01@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-12 text-center text-secondary-400"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Sagar Kashyap. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

