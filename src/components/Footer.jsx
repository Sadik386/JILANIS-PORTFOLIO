import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 0 2rem',
      background: 'var(--bg)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.3rem',
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              Zilani.
            </Link>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
              Digital Marketing Executive. Performance & Growth Specialist.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: '1rem' }}>
              Navigation
            </h5>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['About', 'Services', 'Projects', 'Contact'].map((item, i) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--fg)'}
                  onMouseLeave={e => e.target.style.color = 'var(--fg-muted)'}
                >
                  0{i + 1} — {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Links */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: '1rem' }}>
              Connect
            </h5>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-kader-zilani007' },
                { label: 'Book a Call', href: '/booking' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--fg)'}
                  onMouseLeave={e => e.target.style.color = 'var(--fg-muted)'}
                >
                  {link.label} ↗
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)' }}>
            © {year} Abdul Kader Zilani. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)' }}>
            Ads. SEO. Growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
