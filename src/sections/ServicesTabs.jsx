import React, { useState } from 'react'

const TABS = [
  {
    icon: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f99343a5bf8e1ea79ba212_laptop.svg',
    title: 'Paid media management.',
    description: 'We manage marketing strategies, media buying, keywords analysis & research, copywriting, scaling, optimization and reporting on Meta, Google and TikTok.',
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67fe98c4cb093354cefd3467_media-buying.jpg',
    overlay: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/680171c284c921effa3c60b1_partners.png',
  },
  {
    icon: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67fd67006a7e317967bd764d_chart-line-up.svg',
    title: 'Performance creatives.',
    description: 'We deliver fully edited, ad-ready assets that lower CAC and build trust in seconds. We can also run influencer whitelisted campaigns, repurpose content, or guide you through the scripting and recording of ads if you\'re a founder-led brand.',
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67fe8d30a52b007e8055b077_ads-creatives.jpg',
    overlay: null,
  },
  {
    icon: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67fd6700d72059b65850f51e_funnel.svg',
    title: 'Full-funnel consulting.',
    description: 'We consult on your entire funnel: whether your landing page isn\'t converting, your AOV is too low, your sales team isn\'t closing, your VSL or webinar isn\'t being watched, your email sequences aren\'t getting sales, or your offer just isn\'t up to par, we pinpoint the real issues and connect you with top-tier partners to fix them.',
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67fe9b87ca7a638679eccfd9_funnel-consulting.jpg',
    overlay: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/680175c2049020bfa0565725_partners-funnels.png',
  },
]

export default function ServicesTabs() {
  const [active, setActive] = useState(0)

  return (
    <section className="services-tabs-section">
      <div className="container">
        <span className="section-label" style={{ marginBottom: '2rem', display: 'flex' }}>What we do</span>
        <div className="services-tabs">
          <div className="services-tabs-menu">
            {TABS.map((tab, i) => (
              <button
                key={i}
                className={`services-tab-btn${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="services-tab-header">
                  <img src={tab.icon} alt="" className="services-tab-icon" />
                  <h3>{tab.title}</h3>
                </div>
                <div className="services-tab-body">
                  <p>{tab.description}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="services-tabs-content">
            <div className="services-tabs-image-wrapper">
              <img
                src={TABS[active].image}
                alt=""
                className="services-tabs-image"
              />
              {TABS[active].overlay && (
                <div className="services-tabs-overlay">
                  <img src={TABS[active].overlay} alt="" className="services-tabs-overlay-img" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
