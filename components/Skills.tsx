'use client'

import { motion } from 'framer-motion'
import { Camera, Film, Scissors, Palette, Monitor, Mic } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Monitor,
      skills: [
        { name: "Adobe Premiere Pro", level: "Expert" },
        { name: "Adobe After Effects", level: "Advanced" },
        { name: "DaVinci Resolve", level: "Advanced" },
        { name: "Final Cut Pro", level: "Advanced" },
        { name: "Photoshop", level: "Advanced" },
        { name: "Cinema 4D", level: "Intermediate" }
      ]
    },
    {
      title: "Production",
      icon: Camera,
      skills: [
        { name: "Cinematography", level: "Expert" },
        { name: "Directing", level: "Advanced" },
        { name: "Lighting", level: "Advanced" },
        { name: "Camera Operation", level: "Expert" },
        { name: "Sound Recording", level: "Advanced" },
        { name: "Production Planning", level: "Advanced" }
      ]
    },
    {
      title: "Creative",
      icon: Palette,
      skills: [
        { name: "Storytelling", level: "Expert" },
        { name: "Visual Composition", level: "Expert" },
        { name: "Color Grading", level: "Advanced" },
        { name: "Script Writing", level: "Advanced" },
        { name: "Storyboarding", level: "Advanced" },
        { name: "Art Direction", level: "Advanced" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
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
            Skills & Expertise
          </h2>
          <p className="text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
            Technical expertise and creative vision combined to bring stories to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-center mb-8">
                <category.icon className="h-8 w-8 text-white/70 mr-4" />
                <h3 className="text-xl font-light text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/80 font-light">{skill.name}</span>
                    <span className="text-white/60 text-sm font-light px-3 py-1 bg-white/10 rounded-full border border-white/20">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-12 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
        >
          <h3 className="text-2xl font-light text-white text-center mb-12">
            Equipment & Tools
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Camera className="h-12 w-12 text-white/70 mx-auto mb-4" />
              <h4 className="text-white font-light mb-3">Cameras</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">Canon C70, Sony A7S III, BlackMagic Pocket 6K</p>
            </div>
            
            <div className="text-center">
              <Scissors className="h-12 w-12 text-white/70 mx-auto mb-4" />
              <h4 className="text-white font-light mb-3">Editing</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">Adobe Creative Suite, DaVinci Resolve, Final Cut Pro</p>
            </div>
            
            <div className="text-center">
              <Mic className="h-12 w-12 text-white/70 mx-auto mb-4" />
              <h4 className="text-white font-light mb-3">Audio</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">Rode NTG3, Zoom H6, Sennheiser G4 Wireless</p>
            </div>
            
            <div className="text-center">
              <Film className="h-12 w-12 text-white/70 mx-auto mb-4" />
              <h4 className="text-white font-light mb-3">Lighting</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">ARRI Skypanel, Aputure 300D, Godox VL series</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 