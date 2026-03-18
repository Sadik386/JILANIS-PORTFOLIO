import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import Marquee from '../sections/Marquee.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import Projects from '../sections/Projects.jsx'
import FAQ from '../sections/FAQ.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
