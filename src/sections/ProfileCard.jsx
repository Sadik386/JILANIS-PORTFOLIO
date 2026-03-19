import React from 'react'

export default function ProfileCard() {
  return (
    <section style={{
      padding: '4rem 0',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '280px',
        aspectRatio: '3/4',
        background: 'linear-gradient(135deg, rgba(240, 192, 96, 0.08) 0%, rgba(10, 10, 10, 0) 60%)',
        border: '1px solid var(--border)',
        borderRadius: '1.25rem',
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
    </section>
  )
}
