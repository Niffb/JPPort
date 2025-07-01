'use client'

import { motion } from 'framer-motion'
import { Heart, Film } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Logo and name */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Film className="h-6 w-6 text-green-400" />
            <span className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Jack Petrie</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <span>© 2024 Jack Petrie. Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" fill="currentColor" />
            <span>for film</span>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>
            Passionate film student dedicated to visual storytelling and cinematic excellence.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 