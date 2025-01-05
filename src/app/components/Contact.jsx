// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { Send, CheckCircle } from 'lucide-react'

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1,
//     transition: { 
//       staggerChildren: 0.2
//     }
//   }
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { 
//       type: 'spring',
//       stiffness: 100
//     }
//   }
// }

// const benefits = [
//   "Expertise in modern web technologies",
//   "Collaborative approach to project development",
//   "Strong problem-solving skills",
//   "Commitment to clean, maintainable code",
//   "Timely delivery and excellent communication"
// ]

// export default function Contact() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     // Handle form submission (e.g., send email or save to database)
//     console.log('Form submitted:', { name, email, message })
//     // Reset form fields
//     setName('')
//     setEmail('')
//     setMessage('')
//   }

//   return (
//     <section id="contact" className="py-20 bg-secondary-100 dark:bg-secondary-900">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary-800 dark:text-secondary-100"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           ref={ref}
//         >
//           Get in Touch
//         </motion.h2>
//         <div className="flex flex-col md:flex-row gap-12">
//           <motion.div 
//             className="md:w-1/2"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <motion.h3 
//               className="text-2xl font-semibold mb-6 text-secondary-800 dark:text-secondary-100"
//               variants={itemVariants}
//             >
//               Why Work With Me?
//             </motion.h3>
//             <motion.ul className="space-y-4" variants={itemVariants}>
//               {benefits.map((benefit, index) => (
//                 <motion.li 
//                   key={index}
//                   className="flex items-center text-secondary-600 dark:text-secondary-300"
//                   variants={itemVariants}
//                 >
//                   <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4" />
//                   <span>{benefit}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//             <motion.p 
//               className="mt-6 text-secondary-600 dark:text-secondary-300"
//               variants={itemVariants}
//             >
//               Let's collaborate to bring your ideas to life. Reach out and let's start a conversation about your project needs.
//             </motion.p>
//           </motion.div>
//           <motion.form
//             onSubmit={handleSubmit}
//             className="md:w-1/2"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <motion.div className="mb-4" variants={itemVariants}>
//               <label htmlFor="name" className="block mb-2 font-semibold text-secondary-700 dark:text-secondary-300">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full px-3 py-2 text-secondary-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-600"
//               />
//             </motion.div>
//             <motion.div className="mb-4" variants={itemVariants}>
//               <label htmlFor="email" className="block mb-2 font-semibold text-secondary-700 dark:text-secondary-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full px-3 py-2 text-secondary-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-600"
//               />
//             </motion.div>
//             <motion.div className="mb-4" variants={itemVariants}>
//               <label htmlFor="message" className="block mb-2 font-semibold text-secondary-700 dark:text-secondary-300">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//                 rows={4}
//                 className="w-full px-3 py-2 text-secondary-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-600"
//               ></textarea>
//             </motion.div>
//             <motion.button
//               type="submit"
//               className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               variants={itemVariants}
//             >
//               <Send className="inline-block mr-2" size={20} />
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, CheckCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const benefits = [
  "Expertise in modern web technologies",
  "Collaborative approach to project development",
  "Strong problem-solving skills",
  "Commitment to clean, maintainable code",
  "Timely delivery and excellent communication",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary-100 dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary-800 dark:text-secondary-100"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 text-secondary-800 dark:text-secondary-100"
              variants={itemVariants}
            >
              Why Work With Me?
            </motion.h3>
            <motion.ul className="space-y-4" variants={itemVariants}>
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-secondary-600 dark:text-secondary-300"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="mb-4" variants={itemVariants}>
              <label htmlFor="name" className="block mb-2 font-semibold text-secondary-700 dark:text-secondary-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 text-secondary-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-600"
              />
            </motion.div>
            <motion.div className="mb-4" variants={itemVariants}>
              <label htmlFor="email" className="block mb-2 font-semibold text-secondary-700 dark:text-secondary-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-secondary-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-600"
              />
            </motion.div>
            <motion.div className="mb-4" variants={itemVariants}>
              <label htmlFor="message" className="block mb-2 font-semibold text-secondary-700 dark:text-secondary-300">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 text-secondary-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-600"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <Send className="inline-block mr-2" size={20} />
              Send Message
            </motion.button>
            {status && <p className="mt-4 text-center text-secondary-700 dark:text-secondary-300">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
