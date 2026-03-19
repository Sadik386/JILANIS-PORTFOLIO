import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import ProfileCard from '../sections/ProfileCard.jsx'
import Marquee from '../sections/Marquee.jsx'
import LogosGrid from '../sections/LogosGrid.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import ServicesTabs from '../sections/ServicesTabs.jsx'
import Projects from '../sections/Projects.jsx'
import Carousel from '../sections/Carousel.jsx'
import FAQ from '../sections/FAQ.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
        <ProfileCard />
        <Marquee />
        <LogosGrid />
        <About />
        <Services />
        <ServicesTabs />
        <Carousel />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
