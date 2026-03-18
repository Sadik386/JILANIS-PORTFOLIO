import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isBooking = location.pathname === '/booking'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: '01 About', href: '/#about' },
    { label: '02 Services', href: '/#services' },
    { label: '03 Projects', href: '/#projects' },
    { label: '04 Contact', href: '/#contact' },
  ]

  return (
    <>
      <header
        className="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,240,234,0.06)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{
              width: 28,
              height: 28,
              background: 'var(--accent-bright)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--bg)',
              fontSize: '0.7rem',
              fontWeight: 800,
            }}>
              AZ
            </span>
            Zilani.
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
            className="desktop-nav"
          >
            {!isBooking && navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'var(--fg-muted)',
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--fg)'}
                onMouseLeave={e => e.target.style.color = 'var(--fg-muted)'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/booking" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.82rem' }}>
              Book a Call ↗
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="menu-toggle"
              aria-label="Toggle menu"
              style={{
                display: 'none',
                background: 'none',
                border: '1px solid var(--border)',
                borderRadius: '0.4rem',
                width: 36,
                height: 36,
                cursor: 'pointer',
                color: 'var(--fg)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg)',
          zIndex: 499,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--fg)',
              }}
            >
              {link.label}
            </a>
          ))}
          <Link to="/booking" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Book a Call ↗
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .menu-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
