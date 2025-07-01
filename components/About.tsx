'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Target, Sparkles } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-8 tracking-wide">
            About Me
          </h2>
          <p className="text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
            Passionate about visual storytelling and the transformative power of cinema
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-white/80 font-light leading-relaxed">
              I'm Jack Petrie, a dedicated film student with an unwavering passion for storytelling 
              through the lens. My journey in filmmaking began with a simple fascination for how 
              moving images could evoke emotions and transport audiences to different worlds.
            </p>
            
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Currently pursuing my degree in Film Studies, I specialize in cinematography, 
              directing, and post-production. Each project I undertake is an opportunity to 
              push creative boundaries and explore new techniques in visual narrative.
            </p>

            <p className="text-lg text-white/80 font-light leading-relaxed">
              When I'm not behind the camera, you'll find me studying the works of legendary 
              filmmakers, experimenting with new editing techniques, or collaborating with 
              fellow creatives to bring ambitious visions to life.
            </p>

            {/* Professional Tags */}
            <motion.div
              className="flex flex-wrap gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="bg-white/10 text-white/90 px-6 py-3 rounded-full text-sm font-light border border-white/20 hover:bg-white/15 transition-colors cursor-default">
                Cinematography
              </span>
              <span className="bg-white/10 text-white/90 px-6 py-3 rounded-full text-sm font-light border border-white/20 hover:bg-white/15 transition-colors cursor-default">
                Directing
              </span>
              <span className="bg-white/10 text-white/90 px-6 py-3 rounded-full text-sm font-light border border-white/20 hover:bg-white/15 transition-colors cursor-default">
                Post-Production
              </span>
              <span className="bg-white/10 text-white/90 px-6 py-3 rounded-full text-sm font-light border border-white/20 hover:bg-white/15 transition-colors cursor-default">
                Screenwriting
              </span>
            </motion.div>
          </motion.div>

          {/* Right side - Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <Award className="h-10 w-10 text-white/70 mx-auto mb-4" />
                <h4 className="text-3xl font-light text-white mb-2">5+</h4>
                <p className="text-white/60 text-sm font-light">Film Awards</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <Heart className="h-10 w-10 text-white/70 mx-auto mb-4" />
                <h4 className="text-3xl font-light text-white mb-2">15+</h4>
                <p className="text-white/60 text-sm font-light">Projects</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <Target className="h-10 w-10 text-white/70 mx-auto mb-4" />
                <h4 className="text-3xl font-light text-white mb-2">3</h4>
                <p className="text-white/60 text-sm font-light">Years Experience</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <Sparkles className="h-10 w-10 text-white/70 mx-auto mb-4" />
                <h4 className="text-3xl font-light text-white mb-2">∞</h4>
                <p className="text-white/60 text-sm font-light">Creativity</p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <h4 className="text-xl font-light text-white mb-4">Current Focus</h4>
              <p className="text-white/70 font-light leading-relaxed">
                Working on my senior thesis film - a psychological thriller that explores 
                the blurred lines between reality and perception through innovative 
                cinematography and sound design.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 