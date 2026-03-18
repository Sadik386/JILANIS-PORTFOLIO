import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    number: '01',
    title: 'Meta Ads Management',
    icon: '◈',
    desc: 'I manage high-converting ad campaigns that focus on ROI and lower Cost Per Lead (CPL).',
    items: ['Facebook Ads Manager', 'Audience Targeting', 'Pixel & Lead Tracking'],
    color: 'rgba(240,192,96,0.05)',
    accent: '#f0c060',
  },
  {
    number: '02',
    title: 'SEO Content Strategy',
    icon: '◉',
    desc: 'I leverage AI tools to generate SEO-optimized content that ranks high and drives organic traffic.',
    items: ['AI-Driven Content', 'Keyword Research', 'Social Media SEO'],
    color: 'rgba(139,194,245,0.05)',
    accent: '#8bc2f5',
  },
  {
    number: '03',
    title: 'Performance Marketing',
    icon: '⬡',
    desc: 'Data-driven strategies to scale budget efficiency and improve overall conversion rates.',
    items: ['Budget Optimization', 'A/B Testing', 'Growth Scaling'],
    color: 'rgba(167,243,208,0.05)',
    accent: '#a7f3d0',
  },
  {
    number: '04',
    title: 'Social Media Growth',
    icon: '◇',
    desc: 'Building brand loyalty through strategic community engagement and viral reel content.',
    items: ['Reel Marketing', 'Community Management', 'Ad Copywriting'],
    color: 'rgba(245,158,11,0.05)',
    accent: '#f59e0b',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        // Card entrance
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
        })

        // Stagger inner content
        const inner = card.querySelectorAll('.card-inner')
        gsap.from(inner, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: i * 0.1 + 0.2,
          ease: 'power3.out',
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>02 — Services</div>
          <h2 style={{ color: 'var(--fg)', maxWidth: '600px' }}>
            Services that strengthen
            <br />
            <span style={{ color: 'var(--accent-bright)' }}>your digital presence.</span>
          </h2>
          <p style={{ marginTop: '1rem', maxWidth: '480px' }}>
            (promised)
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              ref={el => cardsRef.current[i] = el}
              className="service-card"
              style={{ background: `linear-gradient(135deg, ${service.color}, var(--bg-alt))` }}
            >
              {/* Card header */}
              <div className="card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: service.accent,
                  opacity: 0.3,
                  lineHeight: 1,
                }}>
                  {service.number}
                </span>
                <span style={{ fontSize: '1.5rem', color: service.accent }}>{service.icon}</span>
              </div>

              <h3 className="card-inner" style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>
                {service.title}
              </h3>

              <p className="card-inner" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {service.desc}
              </p>

              {/* List items */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="card-inner"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.85rem',
                      color: 'var(--fg-muted)',
                    }}
                  >
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: service.accent,
                      flexShrink: 0,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
