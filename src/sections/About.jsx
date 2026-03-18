import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const imgColRef = useRef(null)
  const textColRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textColRef.current?.children ? Array.from(textColRef.current.children) : [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      })

      gsap.from(imgColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Text column */}
          <div ref={textColRef}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>01 — About</div>

            <h2 style={{ marginBottom: '0.5rem', color: 'var(--fg)' }}>
              My path into the
            </h2>
            <h2 style={{ marginBottom: '2rem', color: 'var(--accent-bright)' }}>
              digital world.
            </h2>

            <blockquote style={{
              borderLeft: '3px solid var(--accent-bright)',
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
              color: 'var(--fg)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}>
              "I scale brands using data-driven advertising and SEO content that converts."
            </blockquote>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                My journey into digital marketing began with a passion for scaling businesses in the digital landscape. I’ve always been fascinated by how data and strategy can transform a brand's reach.
              </p>
              <p>
                As a Digital Marketing Executive at Digital Drive Academy LLC, I’ve managed ad budgets exceeding $2,000, focusing on maximizing ROI through precise targeting and pixel tracking.
              </p>
              <p>
                I leverage AI tools for SEO content generation, creating high-ranking social media posts that drive organic growth and engagement for multiple local and international businesses.
              </p>
              <p>
                Currently pursuing my Bachelor's degree, I combine academic knowledge with hands-on experience to deliver results-driven marketing solutions:{' '}
                <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Ads. SEO. Growth.</strong>
              </p>
            </div>

            <a
              href="#contact"
              className="btn btn-outline"
              style={{ marginTop: '2rem' }}
            >
              Get to know me 🕵️
            </a>
          </div>

          {/* Image/visual column */}
          <div ref={imgColRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Avatar placeholder */}
            <div style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--border)',
              borderRadius: '1.25rem',
              aspectRatio: '4/5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(240,192,96,0.08) 0%, rgba(10,10,10,0) 60%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: 'var(--bg)',
                }}>
                  AZ
                </div>
                <span style={{ color: 'var(--fg-muted)', fontSize: '0.85rem' }}>Abdul Kader Zilani</span>
              </div>

              {/* Badge */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'rgba(240,192,96,0.12)',
                border: '1px solid rgba(240,192,96,0.3)',
                borderRadius: '0.5rem',
                padding: '0.5rem 0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--fg)', fontWeight: 500 }}>Open to work</span>
              </div>
            </div>

            {/* Quick facts */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {[
                { icon: '🎓', label: 'Bachelor Level (Ongoing)' },
                { icon: '💻', label: 'Digital Marketing Specialist' },
                { icon: '🎯', label: 'Performance & Growth Focus' },
                { icon: '🚀', label: '3+ Years Experience' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    background: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>{fact.icon}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--fg-muted)', lineHeight: 1.4 }}>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
