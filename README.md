# Portfolio & Booking Website

A modern portfolio + Cal.com booking site built with React, GSAP, Lenis, and Framer Motion.

## Tech Stack

| Library | Purpose |
|---|---|
| **React 18** | UI framework |
| **React Router v6** | Client-side routing (Home + Booking pages) |
| **GSAP + ScrollTrigger** | Card animations, hero entrance, scroll-driven reveals |
| **Lenis** | Smooth inertia-based scrolling |
| **Framer Motion** | Page transitions (enter/exit animations) |
| **Cal.com Embed** | 30-minute booking widget |
| **Vite** | Build tool |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Pages

### `/` — Home
- **Hero** — Animated rotating headline ("Designer!" → "Developer!" → "Creator!") with GSAP
- **Marquee** — Auto-scrolling client logo ticker
- **About** — Background story with GSAP scroll-triggered reveals
- **Services** — 4 service cards (Brand, UX/UI, Dev, Content) with staggered GSAP entrance
- **Projects** — Case study cards (TurnYouPoster, YeleEvents, Hussify)
- **FAQ** — Accessible accordion with smooth height transitions
- **Contact** — Full-bleed CTA section

### `/booking` — Booking
- Cal.com inline embed (link: `siam-siam-sd8yeh/30min`)
- Meeting details sidebar (duration, format, cost)
- Fallback direct link to Cal.com

## Animation Details

### Initial Load
- `Loader.jsx` shows for ~1.8s with GSAP text reveal + progress bar
- Framer Motion `AnimatePresence` fades out the loader and reveals the app

### Page Transitions
- Navigating between Home ↔ Booking triggers a `y: 24 → 0` fade-in and `y: 0 → -16` fade-out

### Scroll Animations (GSAP ScrollTrigger)
- All sections use `ScrollTrigger` to animate children when they enter viewport
- Service cards stagger their inner `.card-inner` elements for a layered reveal

### Smooth Scroll (Lenis)
- Initialized globally in `App.jsx`
- Duration: `1.2s`, easing: `exponential out`

## Cal.com Configuration

The booking embed uses:
- **Link**: `siam-siam-sd8yeh/30min`
- **Layout**: `month_view`
- **Brand color**: `#f0c060` (golden accent)

To change the Cal.com link, update `src/pages/Booking.jsx`:
```js
calLink: "your-username/meeting-type"
```

## Customization

- **Colors**: Edit CSS variables in `src/styles/global.css`
- **Content**: Update text/stats in each section file under `src/sections/`
- **Typography**: Change Google Fonts import in `index.html` + `--font-display` / `--font-body` variables

## File Structure

```
src/
├── App.jsx              # Router, Lenis init, page transitions
├── main.jsx             # Entry point
├── styles/
│   └── global.css       # Design tokens, utility classes
├── components/
│   ├── Header.jsx       # Sticky nav with mobile hamburger
│   ├── Footer.jsx       # 3-column footer
│   └── Loader.jsx       # Initial load animation
├── pages/
│   ├── Home.jsx         # Assembles all sections
│   └── Booking.jsx      # Cal.com embed page
└── sections/
    ├── Hero.jsx         # Rotating headline + stats
    ├── Marquee.jsx      # Client logo ticker
    ├── About.jsx        # Bio + quick facts
    ├── Services.jsx     # 4 service cards
    ├── Projects.jsx     # Case study cards
    ├── FAQ.jsx          # Accordion FAQ
    └── Contact.jsx      # CTA section
```
