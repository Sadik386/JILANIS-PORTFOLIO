import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const ROTATING_WORDS = ['Growth Marketer!', 'Ad Specialist!', 'SEO Expert!', 'Performance Pro!']

export default function Hero() {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const scrollTextRef = useRef(null)
  const [wordIndex, setWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const wordRef = useRef(null)

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
      .from(subRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.5')
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4')
      .from(statsRef.current?.children ? Array.from(statsRef.current.children) : [], {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // Rotating word animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!wordRef.current) return
      setIsAnimating(true)
      gsap.to(wordRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
          gsap.fromTo(
            wordRef.current,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              ease: 'power3.out',
              onComplete: () => setIsAnimating(false),
            }
          )
        },
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: '$2k+', label: 'Ad Budget Managed' },
    { value: '100+', label: 'SEO Content Created' },
    { value: '3+', label: 'Years Experience' },
    { value: 'ROI', label: 'Driven Approach' },
  ]

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '60vh',
        background: 'radial-gradient(ellipse at center, rgba(240,192,96,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Section label */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="section-label">Available for Projects</span>
        </div>

        {/* Main headline */}
        <div ref={headlineRef} style={{ marginBottom: '1.5rem' }}>
          <h1 style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: '0.2em',
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
          }}>
            <span style={{ color: 'var(--fg)' }}>Hey, I'm</span>
            <br />
            <span style={{ color: 'var(--fg)', display: 'block' }}>Abdul Kader Zilani.</span>
          </h1>
          <h1 style={{
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginTop: '0.1em',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.25em',
          }}>
            <span ref={wordRef} style={{
              color: 'var(--accent-bright)',
              display: 'inline-block',
              minWidth: '5ch',
            }}>
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>
        </div>

        {/* Sub headline */}
        <div ref={subRef} style={{ marginBottom: '2.5rem', maxWidth: '560px' }}>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--fg-muted)',
            lineHeight: 1.7,
          }}>
            I help businesses scale their reach and revenue through data-driven 
            advertising, SEO content strategies, and high-performance marketing.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          <a href="#projects" className="btn btn-primary">
            See Projects 👀
          </a>
          <Link to="/booking" className="btn btn-outline">
            Book a Call →
          </Link>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                background: 'var(--bg)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--accent-bright)',
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: '0.78rem',
                color: 'var(--fg-muted)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--fg-muted)',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
