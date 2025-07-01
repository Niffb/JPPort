'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2
      const y = e.clientY - window.innerHeight / 2
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #800020 0%, #a0002a 25%, #1a3a2e 75%, #0d6841 100%)`
      }}
    >
      {/* Dynamic gradient overlay that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x + window.innerWidth/2}px ${mousePosition.y + window.innerHeight/2}px, rgba(255, 255, 255, 0.1), transparent 70%)`
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-12">
          {/* Professional Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-6 tracking-wide">
              Film Student & Creative Director
            </h2>
            <p className="text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              Crafting visual stories that inspire and connect through innovative cinematography and thoughtful direction.
            </p>
          </motion.div>

          {/* Professional Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 12px 32px rgba(255, 255, 255, 0.15)',
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Watch My Reel
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(255, 255, 255, 0.8)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-white/40 rounded-full text-white font-medium hover:bg-white/5 transition-all duration-300"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio')
                portfolioSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Large Name - Bottom */}
      <motion.div
        className="absolute bottom-8 left-12 lg:left-20 xl:left-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white leading-[0.8] tracking-tight">
          Jack
        </h1>
        <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white leading-[0.8] tracking-tight -mt-2">
          Petrie
        </h1>
      </motion.div>
    </section>
  )
}

export default Hero 