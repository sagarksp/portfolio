'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Dev-Tinder',
    description: 'A Fully featured Platform Where Developer With Same Skills Can Make Contact with Each other.',
    image: '/devtinder.png',
    liveUrl: 'https://dev-tinder-frontend-chi.vercel.app/',
    githubUrl: 'https://github.com/sagarksp/Dev-tinder.git',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Swiggy Clone',
    description: 'Food Ordering App Where you can order food in which i use live api of Swiggy.',
    image: '/fooddelivery.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/sagarksp/Food-ordering-app.git',
    tags: ['Vue.js', 'Express', 'Mongodb', 'Nodejs']
  },
  {
    title: 'Netflix-GPT',
    description: 'Netflix-GPT by using GPT Api for movie search.',
    image: '/gpt.png',
    liveUrl: 'https://netflixgpt-pb.vercel.app/',
    githubUrl: 'https://github.com/sagarksp/Netflix-Gpt.git',
    tags: ['React']
  },
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

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-secondary-100 dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary-800 dark:text-secondary-100"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-secondary-700 rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-800 dark:text-secondary-100">{project.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-primary-100 text-primary-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-600 hover:text-secondary-700 dark:text-secondary-300 dark:hover:text-secondary-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} className="mr-1" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

