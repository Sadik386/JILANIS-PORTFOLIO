import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: 'digital-drive-ads',
    title: 'Meta Ad Campaigns',
    type: 'Performance Marketing · Digital Drive Academy',
    tags: ['Meta Ads', 'ROI', 'Scaling', 'Pixel'],
    desc: 'Managed cumulative ad spend of $2,000+, focusing on lower CPL and high ROI for various clients.',
    stats: [
      { value: '$2,000+', label: 'Spend Managed' },
      { value: 'ROI', label: 'Focused' },
      { value: 'Meta', label: 'Ads Manager' },
      { value: 'Low CPL', label: 'Optimization' },
    ],
    color: '#f0c060',
    url: '#',
  },
  {
    id: 'seo-content-gen',
    title: 'AI-Driven SEO Strategy',
    type: 'Content Generation · Freelance',
    tags: ['SEO', 'AI Tools', 'Growth'],
    desc: 'Leveraged AI tools to generate high-ranking social media posts and blog content for organic reach.',
    stats: [
      { value: '100+', label: 'Posts Created' },
      { value: 'Organic', label: 'Growth' },
      { value: 'AI', label: 'Powered' },
      { value: 'SEO', label: 'Optimized' },
    ],
    color: '#8bc2f5',
    url: '#',
  },
  {
    id: 'sourcing-pi',
    title: 'Supply Chain Digitalization',
    type: 'Digital Support · Sourcing Pi',
    tags: ['CRM', 'Operations', 'Efficiency'],
    desc: 'Coordinated international supply chain documentation and vendor follow-ups using digital CRM tools.',
    stats: [
      { value: 'Intl', label: 'Documentation' },
      { value: 'CRM', label: 'Management' },
      { value: '24/7', label: 'Support' },
      { value: 'Efficient', label: 'Workflow' },
    ],
    color: '#a7f3d0',
    url: '#',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const projectRefs = useRef([])
  const [projects, setProjects] = useState(PROJECTS)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_URL}/api/projects`)
      if (res.ok) {
        const data = await res.json()
        setProjects(data)
      }
    } catch (err) {
      console.error('Failed to fetch projects', err)
    }
  }

  useEffect(() => {
    if (projects.length === 0) return
    
    // Give DOM a tick to update before applying GSAP
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        
        // Filter out null refs just in case
        const validRefs = projectRefs.current.filter(Boolean);
        
        validRefs.forEach((el, i) => {
          gsap.fromTo(el, {
            y: 60,
            opacity: 0,
          }, {
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            duration: 0.75,
            delay: i * 0.15,
            ease: 'power3.out',
          })
        });

        // Refresh ScrollTrigger to ensure dynamic heights are accounted for
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
      }, sectionRef)
      return () => ctx.revert()
    }, 150);

    return () => clearTimeout(timer);
  }, [projects])

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>03 — Projects</div>
          <h2 style={{ color: 'var(--fg)' }}>
            Projects I'm
            <br />
            <span style={{ color: 'var(--accent-bright)' }}>very proud of.</span>
          </h2>
          <p style={{ marginTop: '1rem', maxWidth: '520px' }}>
            Every project tells its own story. From concept to launch, I accompany brands
            on the path from idea to digital presence.
          </p>
        </div>

        {/* Projects list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.length > 0 ? projects.map((project, i) => (
            <article
              key={project._id || i}
              ref={el => projectRefs.current[i] = el}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                background: 'var(--bg-alt)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Visual */}
               <div style={{
                  background: `linear-gradient(135deg, ${project.color || '#f0c060'}15, transparent)`,
                  padding: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '220px',
                  borderRight: '1px solid var(--border)',
                }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 800,
                  color: project.color || 'var(--accent-bright)',
                  opacity: 0.8,
                  letterSpacing: '-0.03em',
                  textAlign: 'center',
                  lineHeight: 1,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {project.image ? (
                     <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
                  ) : (
                     project.title ? project.title.split('').slice(0, 2).join('').toUpperCase() : 'PR'
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {project.category && (
                    <span className="tag" style={{ borderColor: `${project.color || 'var(--accent-bright)'}40`, color: project.color || 'var(--accent-bright)' }}>
                      {project.category}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--fg)' }}>
                  {project.title || 'Untitled Project'}
                </h3>
                {project.type && (
                  <p style={{ fontSize: '0.85rem', color: project.color || 'var(--accent-bright)', marginBottom: '1rem', fontWeight: 500 }}>
                    {project.type}
                  </p>
                )}
                {project.description && (
                  <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', whiteSpace: 'pre-wrap' }}>
                    {project.description}
                  </p>
                )}

                {/* Mini stats */}
                {project.stats && project.stats.length > 0 && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}>
                    {project.stats.map(stat => (
                      <div key={stat.label} style={{
                        background: 'rgba(245,240,234,0.03)',
                        border: '1px solid var(--border)',
                        borderRadius: '0.5rem',
                        padding: '0.75rem',
                      }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: project.color || 'var(--accent-bright)' }}>
                          {stat.value}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: '0.82rem' }}>
                    View Live Project ↗
                  </a>
                )}
              </div>
            </article>
          )) : (
            <p style={{ color: 'var(--fg-muted)', textAlign: 'center' }}>Loading projects...</p>
          )}
        </div>
      </div>
    </section>
  )
}
