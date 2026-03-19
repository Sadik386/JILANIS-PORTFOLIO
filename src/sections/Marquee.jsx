import React from 'react'

const KEYWORDS = [
  'Meta Ads', 'SEO Content', 'ROI Focused', 'Pixel Tracking',
  'GA4 Analytics', 'GTM Setup', 'Growth Scaling', 'CPL Optimization',
]

export default function Marquee() {
  const doubled = [...KEYWORDS, ...KEYWORDS]

  return (
    <section style={{
      padding: '3rem 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      {/* Label */}
      <div className="container" style={{ marginBottom: '1.5rem' }}>
        <span className="section-label">SKILLS I HAVE</span>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                padding: '0 3rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '-0.01em',
                color: 'var(--fg-muted)',
                transition: 'color 0.2s',
              }}>
                {name}
              </span>
              <span style={{
                width: 4,
                height: 4,
                background: 'var(--accent-bright)',
                borderRadius: '50%',
                flexShrink: 0,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
