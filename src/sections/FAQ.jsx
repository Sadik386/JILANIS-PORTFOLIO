import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FAQ_ITEMS = [
  {
    q: 'What services do you offer?',
    a: 'I offer a full range of digital marketing services including Meta Ads management, SEO content strategy, performance marketing, and social media growth. I focus on data-driven results and ROI.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary depending on scope and goals. Initial campaign setup typically takes 1–2 weeks, while SEO content strategies are usually ongoing monthly retainers for consistent growth. I always provide a clear roadmap.',
  },
  {
    q: 'What does a working relationship with you look like?',
    a: 'I work closely with clients throughout every phase. After an initial discovery call, I create a proposal with scope, timeline, and pricing. Projects run in structured phases with regular check-ins and feedback loops — no surprises.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely. I work remotely with clients across Europe, North America, and beyond. All projects are managed digitally with tools like Figma, Notion, and video calls to keep everything transparent and efficient.',
  },
  {
    q: 'What are your rates?',
    a: 'Rates depend on the project type, scope, and timeline. I offer both fixed-price project packages and hourly/retainer arrangements. The best way to get a quote is to book a free 30-minute discovery call.',
  },
  {
    q: 'Can you work with my existing brand/website?',
    a: 'Yes! Many clients come to me with an existing brand or site that needs a refresh, extension, or optimization. I\'m experienced in working within existing design systems and technical setups.',
  },
]

function AccordionItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current || !bodyRef.current) return
    if (open) {
      contentRef.current.style.height = `${bodyRef.current.scrollHeight}px`
    } else {
      contentRef.current.style.height = '0px'
    }
  }, [open])

  return (
    <div className={`accordion-item ${open ? 'open' : ''}`}>
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>
          <span style={{ color: 'var(--fg-muted)', fontSize: '0.85rem', marginRight: '0.75rem' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          {item.q}
        </span>
        <span className="accordion-icon" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div className="accordion-content" ref={contentRef} style={{ height: 0 }}>
        <div className="accordion-body" ref={bodyRef}>
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
      gsap.from(faqRef.current?.children ? Array.from(faqRef.current.children) : [], {
        scrollTrigger: { trigger: faqRef.current, start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="faq"
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
          {/* Left: header */}
          <div ref={headerRef} style={{ position: 'sticky', top: '6rem' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>FAQ</div>
            <h2 style={{ color: 'var(--fg)', marginBottom: '1.25rem' }}>
              Frequently
              <br />
              <span style={{ color: 'var(--accent-bright)' }}>asked questions.</span>
            </h2>
            <p style={{ maxWidth: '32ch' }}>
              Can't find the answer you're looking for? Book a call and we'll talk it through.
            </p>
            <a href="/booking" className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Book a Call →
            </a>
          </div>

          {/* Right: accordion */}
          <div ref={faqRef}>
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
