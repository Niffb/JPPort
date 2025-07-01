'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </main>
  )
} 