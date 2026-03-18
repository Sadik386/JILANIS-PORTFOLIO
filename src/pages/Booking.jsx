import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

// Cal.com inline embed script loader
function CalEmbed() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["-", namespace, ar[2]]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://cal.com"});
      Cal("inline", {
        elementOrSelector: "#cal-booking-embed",
        calLink: "siam-siam-sd8yeh/30min",
        layout: "month_view"
      });
      Cal("ui", {
        styles: {
          branding: { brandColor: "#f0c060" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    `
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      id="cal-booking-embed"
      style={{
        width: '100%',
        minHeight: '700px',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--bg-alt)',
      }}
    />
  )
}

export default function Booking() {
  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ paddingTop: '7rem', paddingBottom: '5rem', minHeight: '100vh' }}>
        <div className="container">
          {/* Back link */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--fg-muted)',
              fontSize: '0.85rem',
              marginBottom: '3rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-muted)'}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Portfolio
          </Link>

          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '3rem',
          }}>
            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Schedule a Meeting</div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}>
                Let's talk
                <br />
                <span style={{ color: 'var(--accent-bright)' }}>about your project.</span>
              </h1>
              <p style={{ maxWidth: '40ch', lineHeight: 1.8, marginBottom: '2rem' }}>
                Book a free 30-minute discovery call. We'll discuss your goals,
                current challenges, and how I can help you scale your brand's reach and revenue.
              </p>

              {/* What to expect */}
              <div style={{
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '1.5rem',
                background: 'var(--bg-alt)',
              }}>
                <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
                  What to expect
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    '🎯 Understanding your project goals',
                    '📋 Defining scope and requirements',
                    '💡 ROI and scaling strategies',
                    '💬 Q&A and next steps',
                  ].map((item) => (
                    <li key={item} style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span>{item.slice(0, 2)}</span>
                      <span>{item.slice(3)}</span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--accent-bright)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    color: 'var(--bg)',
                    flexShrink: 0,
                  }}>
                    AZ
                  </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--fg)' }}>
                        Abdul Kader Zilani
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--fg-muted)' }}>
                        Performance & Growth Specialist
                      </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Details sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '⏱', label: 'Duration', value: '30 minutes' },
                { icon: '🎥', label: 'Format', value: 'Google Meet / Zoom' },
                { icon: '🆓', label: 'Cost', value: 'Free' },
                { icon: '🌍', label: 'Availability', value: 'Global – Multiple Timezones' },
              ].map((detail) => (
                <div key={detail.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                }}>
                  <span style={{ fontSize: '1.25rem' }}>{detail.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                      {detail.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--fg)', fontFamily: 'var(--font-display)' }}>
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cal.com embed */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--fg)' }}>Select a time that works for you</h3>
            <CalEmbed />
          </div>

          {/* Fallback link */}
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem' }}>
            Having trouble with the calendar?{' '}
            <a
              href="https://cal.com/siam-siam-sd8yeh/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-bright)', borderBottom: '1px solid currentColor' }}
            >
              Open in Cal.com ↗
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
