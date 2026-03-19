import React from 'react'

const CAROUSEL_ITEMS = [
  {
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97a0b15a3bbdfaf3cf468_caroussel-item_educate.jpg',
    logo: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97c9c00a7b5e9dbd5a72e_scholistico.png',
    text: 'We helped them get\u00a0their first',
    stat: '+$1M',
    statSub: 'month',
  },
  {
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97a0c889a1d5dd83da22c_caroussel-item_immofacile.jpg',
    logo: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f9a2cd394c3a5c11832adc_katoura.png',
    text: 'we helped them scale from $70K/month to',
    stat: '+$210K',
    statSub: 'per month',
  },
  {
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97a0bf715d56d504807d2_caroussel-item_serge.jpg',
    logo: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/68011967d800dcbe79b12770_AdArchitect.png',
    text: '"Ad architect" Program Completed\u00a0by',
    stat: '+4500',
    statSub: 'students',
  },
  {
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97a0c889a1d5dd83da224_caroussel-item_tjr.jpg',
    logo: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f9a2cd5c66397bb828a848_(code)word.png',
    text: 'We helped them go from $40K/Month to',
    stat: '+$225K',
    statSub: 'Per month',
  },
  {
    image: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f97a0b8bdfa23e9e936cdd_caroussel-item_karim.jpg',
    logo: 'https://cdn.prod.website-files.com/68092a3ce2f39bed81d2f7a8/67f9a2cd394c3a5c11832ad7_golightly.png',
    text: 'We helped them generate an additional',
    stat: '$500K',
    statSub: 'in 3 months',
  },
]

function CarouselTrack() {
  return (
    <div className="carousel-track">
      {CAROUSEL_ITEMS.map((item, i) => (
        <React.Fragment key={i}>
          <div className="carousel-item">
            <img loading="lazy" src={item.image} alt="" className="carousel-image" />
          </div>
          <div className="carousel-item is-small">
            <img loading="eager" src={item.logo} alt="" className="carousel-logo" />
            <div className="tag text-align-center">{item.text}</div>
            <div className="tag text-align-center">
              <span className="carousel-gold-stats">{item.stat}<br /></span>
              {item.statSub}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default function Carousel() {
  return (
    <section className="carousel-section">
      <div className="container" style={{ marginBottom: '1.5rem' }}>
        <span className="section-label">Results</span>
      </div>
      <div className="carousel-outer">
        <CarouselTrack />
        <CarouselTrack />
        <CarouselTrack />
      </div>
    </section>
  )
}
