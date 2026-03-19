import React from 'react'

const LOGOS = [
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef84994f9e015b42ffa_image%2013.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef84994f9e015b42fd7_image%207.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef88bdfa23e9e9756f2_image%208.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef993b7742967039d7c_Group%2023%201.png', wide: true },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef8c9149a3d0376883a_image%2010.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef8adc5478d69761ba8_image%2011%201.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef8adc5478d69761bab_image%2012.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef8257f06088b132305_image%2014.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef857769e718f97d5ab_image%2015%201.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef86e1f3e74c45c8b5b_image%2016.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef9db521d6c8bf19c35_image%2017.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef8f71971ad5f02a083_Frame.png', wide: true },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef98693b6cbf25dbac8_image%2021.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef9b786026d9cb5ac5f_image%2022%201.png', small: true },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef8f61e3d99e19a3150_Frame-1.png' },
  { src: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97ef91d1c2b91340c93bc_image%2023%201.png' },
]

export default function LogosGrid() {
  return (
    <section className="logos-section">
      <div className="container">
        <span className="section-label" style={{ marginBottom: '2rem', display: 'flex' }}>Trusted by</span>
        <div className="logos-grid">
          {LOGOS.map((logo, i) => (
            <div className="logos-grid-item" key={i}>
              <img
                loading="lazy"
                src={logo.src}
                alt=""
                className={`logos-img${logo.wide ? ' is-wide' : ''}${logo.small ? ' is-small' : ''}`}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <span className="tag" style={{ textTransform: 'uppercase' }}>and many more +</span>
        </div>
      </div>
    </section>
  )
}
