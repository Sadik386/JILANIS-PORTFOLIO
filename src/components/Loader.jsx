import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Loader() {
  const textRef = useRef(null)
  const barRef = useRef(null)
  const loaderRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(textRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    })
  }, [])

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader-text" ref={textRef}>
        <span>Portfolio</span>
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" ref={barRef} />
      </div>
    </div>
  )
}
