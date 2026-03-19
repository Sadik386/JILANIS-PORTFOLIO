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

        </div>

        {/* Social icons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          marginBottom: '2rem',
          marginLeft: '62rem',
        }}>
          {[
            { label: 'YouTube', href: 'https://youtube.com', icon: 'https://cdn.prod.website-files.com/5fd7b40fdda7331ff779b5f0/68093478231ce0a4bf1097ff_72e709e88af9f5022b7533f53d3e36b3_youtube.svg' },
            { label: 'Facebook', href: 'https://facebook.com', icon: 'https://cdn.prod.website-files.com/5fd7b40fdda7331ff779b5f0/68093478231ce0a4bf1097fe_08a90c1462cc240a01e4183ab9e949b9_Facebook.svg' },
            { label: 'Instagram', href: 'https://instagram.com', icon: 'https://cdn.prod.website-files.com/5fd7b40fdda7331ff779b5f0/68093478231ce0a4bf1097fd_cc373f5cbe3aec88955c296e1ee588bc_Instagram.svg' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-kader-zilani007', icon: 'https://cdn.prod.website-files.com/5fd7b40fdda7331ff779b5f0/68093478231ce0a4bf1097fc_b07de26aeb8c21aab0a42e67c6972745_LinkedIn.svg' },
            { label: 'X', href: 'https://x.com', icon: 'https://cdn.prod.website-files.com/5fd7b40fdda7331ff779b5f0/68093478231ce0a4bf1097fb_9f14a6ee7dc888e9891e903558df91ca_x.svg' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                opacity: 0.5,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.5'}
            >
              <img loading="lazy" src={social.icon} alt="" style={{ width: 24, height: 24 }} />
            </a>
          ))}
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
