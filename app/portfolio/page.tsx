'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Calendar, Award, ArrowLeft, Filter, Grid, List } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = ['All', 'Short Film', 'Documentary', 'Music Video', 'Drama', 'Commercial', 'Experimental']

  const projects = [
    {
      id: 1,
      title: "Echoes of Tomorrow",
      category: "Short Film",
      year: "2024",
      description: "A sci-fi thriller exploring the consequences of time manipulation through the eyes of a young physicist who discovers that her research into temporal mechanics has catastrophic implications for humanity.",
      longDescription: "This ambitious short film combines practical effects with cutting-edge cinematography to tell a story about responsibility, sacrifice, and the weight of knowledge. Shot over 10 days with a crew of 25 students and professionals.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
      awards: ["Best Cinematography - Student Film Festival", "Outstanding Achievement in Visual Effects"],
      duration: "12 min",
      featured: true,
      techSpecs: "Shot on RED Dragon 6K, Edited in DaVinci Resolve"
    },
    {
      id: 2,
      title: "The Last Frame",
      category: "Documentary",
      year: "2023",
      description: "Following the last film photographer in a digital world as he struggles to preserve the art of analog photography.",
      longDescription: "An intimate portrait of 82-year-old photographer Harold Chen, who has been developing film for over 60 years. The documentary explores themes of tradition, technology, and artistic passion in the modern world.",
      image: "https://images.unsplash.com/photo-1489599996486-d5fb5e7b38b8?w=800&h=600&fit=crop",
      awards: ["Audience Choice Award", "Best Documentary Short"],
      duration: "8 min",
      featured: true,
      techSpecs: "Shot on Canon C70, Natural lighting"
    },
    {
      id: 3,
      title: "Neon Dreams",
      category: "Music Video",
      year: "2023",
      description: "A vibrant exploration of urban nightlife through music, featuring dynamic choreography and neon-soaked visuals.",
      longDescription: "Collaboration with local band 'Electric Pulse' to create a music video that captures the energy and atmosphere of city nightlife. Features innovative use of practical lighting and synchronized camera movements.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      awards: [],
      duration: "4 min",
      featured: false,
      techSpecs: "Multi-camera setup, Practical neon lighting"
    },
    {
      id: 4,
      title: "Silent Whispers",
      category: "Drama",
      year: "2023",
      description: "A poignant tale about communication beyond words, following a deaf teenager navigating high school relationships.",
      longDescription: "This sensitive drama explores themes of identity, belonging, and communication. Features authentic deaf actors and incorporates ASL as a central storytelling element.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      awards: ["Best Director - Regional Competition", "Outstanding Performance Award"],
      duration: "15 min",
      featured: true,
      techSpecs: "Shot on Sony FX6, Authentic casting"
    },
    {
      id: 5,
      title: "City Pulse",
      category: "Commercial",
      year: "2024",
      description: "Dynamic brand commercial capturing urban energy for a major athletic wear company.",
      longDescription: "High-energy commercial showcasing the connection between urban environments and athletic performance. Features parkour athletes and uses innovative drone cinematography.",
      image: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=800&h=600&fit=crop",
      awards: [],
      duration: "30 sec",
      featured: false,
      techSpecs: "Drone cinematography, High-speed cameras"
    },
    {
      id: 6,
      title: "Reflections",
      category: "Experimental",
      year: "2022",
      description: "An abstract journey through memory and identity using innovative visual techniques.",
      longDescription: "This experimental piece pushes the boundaries of traditional narrative structure, using mirror installations, water reflections, and unconventional editing to explore themes of self-perception and memory.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      awards: ["Innovation in Film Award"],
      duration: "6 min",
      featured: false,
      techSpecs: "Experimental techniques, Mirror installations"
    },
    {
      id: 7,
      title: "Breaking Point",
      category: "Short Film",
      year: "2024",
      description: "A psychological thriller about a student filmmaker who becomes obsessed with documenting real life.",
      longDescription: "This meta-narrative explores the ethics of documentary filmmaking and the psychological toll of constantly observing life through a lens.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      awards: ["Best Screenplay - Student Awards"],
      duration: "18 min",
      featured: true,
      techSpecs: "Handheld cinematography, Natural lighting"
    },
    {
      id: 8,
      title: "Seasons",
      category: "Documentary",
      year: "2023",
      description: "A year-long documentation of a local farm through all four seasons.",
      longDescription: "Shot over 12 months, this documentary captures the cyclical nature of farm life and the dedication required to work the land.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
      awards: [],
      duration: "22 min",
      featured: false,
      techSpecs: "Time-lapse photography, Seasonal cinematography"
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              My <span className="text-red-400">Portfolio</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive collection of my filmmaking journey, showcasing diverse projects 
              that span multiple genres and demonstrate my growth as a visual storyteller.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Featured <span className="text-green-400">Works</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Highlighting my most significant and award-winning projects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 shadow-lg transition-colors"
                    >
                      <Play size={32} fill="currentColor" />
                    </motion.button>
                  </motion.div>

                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-800/50 text-green-300 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="space-y-3 mb-6">
                    {project.awards.map((award, awardIndex) => (
                      <div key={awardIndex} className="flex items-center text-red-400 text-sm">
                        <Award size={16} className="mr-3 flex-shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{project.duration}</span>
                    <span>{project.techSpecs}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              All <span className="text-red-400">Projects</span>
            </h2>
          </motion.div>

          {/* Filter and View Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
          >
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </motion.div>

          {/* Projects Grid/List */}
          <div className={viewMode === 'grid' 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-8"
          }>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full p-4 shadow-lg hover:bg-white transition-colors"
                    >
                      <Play size={24} fill="currentColor" />
                    </motion.button>
                  </motion.div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-green-800/90 backdrop-blur-sm text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {project.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {viewMode === 'list' ? project.longDescription : project.description}
                  </p>

                  {project.awards.length > 0 && (
                    <div className="space-y-2">
                      {project.awards.map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center text-red-400 text-sm">
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

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Portfolio 