import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import Home from './pages/Home.jsx'
import Booking from './pages/Booking.jsx'
import Loader from './components/Loader.jsx'
import Admin from './pages/Admin.jsx'


// ─── Lenis smooth scroll setup ───────────────────────────────────────────────
function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}



// ─── Animated Routes ─────────────────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.87, 0, 0.13, 1] } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/booking"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Booking />
            </motion.div>
          }
        />
        <Route
          path="/admin"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Admin />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <LenisProvider>
        <div className="noise-overlay" aria-hidden="true" />
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            >
              <Loader />
            </motion.div>
          ) : (
            <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4 } }}>
              <AnimatedRoutes />
            </motion.div>
          )}
        </AnimatePresence>
      </LenisProvider>
    </BrowserRouter>
  )
}
