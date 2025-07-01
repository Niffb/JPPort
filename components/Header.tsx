'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Film } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isEmailHovered, setIsEmailHovered] = useState(false)
  const [showCopyFeedback, setShowCopyFeedback] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('jack.petrie@filmstudent.edu')
      setShowCopyFeedback(true)
      setTimeout(() => setShowCopyFeedback(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      {/* Main Navigation Pill */}
      <motion.nav
        className={`bg-black/90 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3 shadow-2xl transition-all duration-500 ${
          scrolled ? 'scale-95' : 'scale-100'
        }`}
        whileHover={{ scale: scrolled ? 0.98 : 1.02 }}
      >
        <div className="flex items-center space-x-8">
          {/* Logo/Icon */}
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Film className="h-5 w-5 text-black" />
            </div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          {/* Contact Email Pill */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden md:block relative"
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => setIsEmailHovered(false)}
          >
            <motion.div 
              className="bg-white rounded-full px-4 py-2 cursor-pointer shadow-lg"
              onClick={handleEmailClick}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative overflow-hidden">
                {/* Email Text */}
                <motion.span 
                  className="text-black text-sm font-medium block"
                  animate={{
                    y: isEmailHovered ? -20 : 0,
                    opacity: isEmailHovered ? 0 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  jack.petrie@filmstudent.edu
                </motion.span>
                
                {/* Copy Text */}
                <motion.span 
                  className="text-black text-sm font-medium block absolute inset-0 flex items-center justify-center"
                  animate={{
                    y: isEmailHovered ? 0 : 20,
                    opacity: isEmailHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Copy this email
                </motion.span>
              </div>
              
              {/* Copy Success Feedback */}
              {showCopyFeedback && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute inset-0 flex items-center justify-center text-green-600 text-sm font-medium bg-white rounded-full"
                >
                  Email copied!
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-green-400 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-4 bg-black/95 backdrop-blur-md border border-gray-700 rounded-2xl px-6 py-4 shadow-2xl"
        >
          <div className="space-y-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block text-white/90 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-3 border-t border-gray-700">
              <a 
                href="mailto:jack.petrie@filmstudent.edu" 
                className="block text-green-400 text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                jack.petrie@filmstudent.edu
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header 