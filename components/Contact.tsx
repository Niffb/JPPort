'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Let's <span className="text-red-400">Connect</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next film project? Let's bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're looking for a cinematographer, director, or just want to 
                discuss film, I'd love to hear from you. Let's create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 transition-all duration-300 hover:text-white"
              >
                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>jack.petrie@filmstudent.edu</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 transition-all duration-300 hover:text-white"
              >
                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 transition-all duration-300 hover:text-white"
              >
                <div className="bg-red-900 p-3 rounded-lg border border-red-800">
                  <MapPin className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Los Angeles, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Youtube, href: '#', label: 'YouTube' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 hover:text-green-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors">
                  <option>Short Film</option>
                  <option>Documentary</option>
                  <option>Music Video</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-lg flex items-center justify-center space-x-2 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 