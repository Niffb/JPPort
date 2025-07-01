'use client'

import { motion } from 'framer-motion'
import { Play, Calendar, Award } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Echoes of Tomorrow",
      category: "Short Film",
      year: "2024",
      description: "A sci-fi thriller exploring the consequences of time manipulation",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
      awards: ["Best Cinematography - Student Film Festival"],
      duration: "12 min"
    },
    {
      id: 2,
      title: "The Last Frame",
      category: "Documentary",
      year: "2023",
      description: "Following the last film photographer in a digital world",
      image: "https://images.unsplash.com/photo-1489599996486-d5fb5e7b38b8?w=800&h=600&fit=crop",
      awards: ["Audience Choice Award"],
      duration: "8 min"
    },
    {
      id: 3,
      title: "Neon Dreams",
      category: "Music Video",
      year: "2023",
      description: "A vibrant exploration of urban nightlife through music",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      awards: [],
      duration: "4 min"
    },
    {
      id: 4,
      title: "Silent Whispers",
      category: "Drama",
      year: "2023",
      description: "A poignant tale about communication beyond words",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      awards: ["Best Director - Regional Competition"],
      duration: "15 min"
    },
    {
      id: 5,
      title: "City Pulse",
      category: "Commercial",
      year: "2024",
      description: "Dynamic brand commercial capturing urban energy",
      image: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=800&h=600&fit=crop",
      awards: [],
      duration: "30 sec"
    },
    {
      id: 6,
      title: "Reflections",
      category: "Experimental",
      year: "2022",
      description: "An abstract journey through memory and identity",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      awards: ["Innovation in Film Award"],
      duration: "6 min"
    }
  ]

  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-8 tracking-wide">
            Portfolio
          </h2>
          <p className="text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
            A curated collection of visual stories that showcase my journey as a filmmaker
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Play button overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-black rounded-full p-4 shadow-lg hover:bg-white/90 transition-colors"
                  >
                    <Play size={24} fill="currentColor" />
                  </motion.button>
                </motion.div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-light border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-light">
                    {project.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-light text-white group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/60 text-sm font-light">
                    <Calendar size={16} className="mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-white/70 text-sm font-light mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.awards.length > 0 && (
                  <div className="space-y-2">
                    {project.awards.map((award, awardIndex) => (
                      <div key={awardIndex} className="flex items-center text-white/80 text-sm font-light">
                        <Award size={14} className="mr-2 flex-shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-white text-black font-light py-4 px-10 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 