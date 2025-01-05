import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Header = dynamic(() => import('./components/Header'), { ssr: true })
const Hero = dynamic(() => import('./components/Hero'), { ssr: true })
const About = dynamic(() => import('./components/About'), { ssr: true })
const Experience = dynamic(() => import('./components/Experience'), { ssr: true })
const Projects = dynamic(() => import('./components/Projects'), { ssr: true })
const Skills = dynamic(() => import('./components/Skills'), { ssr: true })
const Contact = dynamic(() => import('./components/Contact'), { ssr: true })
const Footer = dynamic(() => import('./components/Footer'), { ssr: true })

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
