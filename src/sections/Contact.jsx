import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.children ? Array.from(sectionRef.current.querySelectorAll('.anim')) : [], {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        padding: 'clamp(6rem, 12vw, 12rem) 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(240,192,96,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="anim" style={{ marginBottom: '1rem' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>04 — Contact</span>
        </div>

        <h2 className="anim" style={{
          color: 'var(--fg)',
          marginBottom: '0.5rem',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
        }}>
          Let's work
        </h2>
        <h2 className="anim" style={{
          color: 'var(--accent-bright)',
          marginBottom: '2rem',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
        }}>
          together.
        </h2>

        <p className="anim" style={{
          maxWidth: '480px',
          margin: '0 auto 3rem',
          fontSize: '1.05rem',
          lineHeight: 1.7,
        }}>
          Have a project in mind? Let's discuss how I can help you scale your 
          business through performance marketing and SEO.
        </p>

        <div className="anim" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/booking" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            Book a Free Call →
          </Link>
          <a
            href="mailto:arafempire@gmail.com"
            className="btn btn-outline"
            style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
          >
            Send an Email ✉️
          </a>
        </div>

        {/* Social links */}
        <div className="anim" style={{
          marginTop: '4rem',
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
        }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-kader-zilani007' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--fg-muted)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--fg)'; e.target.style.borderColor = 'var(--fg)' }}
              onMouseLeave={e => { e.target.style.color = 'var(--fg-muted)'; e.target.style.borderColor = 'var(--border)' }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
