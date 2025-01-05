'use client'

import { motion } from 'framer-motion'

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 dark:from-primary-900 dark:via-secondary-900 dark:to-accent-900"
        animate={{
          background: [
            'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            'linear-gradient(to top right, var(--tw-gradient-stops))',
            'linear-gradient(to top left, var(--tw-gradient-stops))',
            'linear-gradient(to bottom right, var(--tw-gradient-stops))',
          ],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary-300 dark:bg-primary-700 opacity-20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 10 + 10,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundAnimation

