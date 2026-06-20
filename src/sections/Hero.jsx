import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Wok from '../components/Wok.jsx'
import Kong from '../components/Kong.jsx'
import { ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const wokWrapRef = useRef(null)
  const kongRef = useRef(null)
  const headlineRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The wok tilts and "tosses" as the hero scrolls away — like tossing food off-frame.
      gsap.to(wokWrapRef.current, {
        yPercent: -40,
        rotate: 18,
        scale: 0.82,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(kongRef.current, {
        yPercent: -70,
        xPercent: 25,
        rotate: -14,
        scale: 0.7,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(headlineRef.current, {
        yPercent: -60,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '70% top',
          scrub: true,
        },
      })

      gsap.to(logoRef.current, {
        yPercent: -50,
        scale: 0.88,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      })

      // ambient idle float for the wok (independent of scroll)
      gsap.to('.hero-wok-svg', {
        y: -14,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
      gsap.to('.hero-logo-img', {
        y: -8,
        duration: 3.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.2,
      })
      gsap.to('.hero-kong-svg', {
        y: 10,
        rotate: 4,
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.4,
      })
      // flame flicker
      gsap.to('.flame-tongue', {
        scaleY: 1.08,
        scaleX: 0.96,
        duration: 0.35,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.12, repeat: -1, yoyo: true },
      })
      gsap.to('.smoke-wisp', {
        y: -20,
        opacity: 0,
        duration: 4,
        ease: 'power1.out',
        repeat: -1,
        stagger: 1.4,
      })
    })
    return () => ctx.revert()
  }, [])

  const scrollTo = (sel) => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" ref={heroRef} className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-vignette" />

      <div className="hero-inner container">
        <motion.div
          className="hero-kong"
          ref={kongRef}
          initial={{ opacity: 0, scale: 0.6, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Kong className="hero-kong-svg" />
        </motion.div>

        <motion.div
          ref={logoRef}
          className="hero-logo-wrap"
          initial={{ opacity: 0, scale: 0.6, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-logo-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.45] }}
            transition={{ duration: 1.8, delay: 1.2, ease: 'easeOut' }}
          />
          <img src={logo} alt="Ching Kong — Our Wok Talks" className="hero-logo-img" />
        </motion.div>

        <motion.p
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
        >
          Panchkula's Wok-Fired Obsession
        </motion.p>

        <div ref={headlineRef} className="hero-headline-group">
          <motion.h1
            className="hero-headline glow-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Wok Talks
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Bold Indo-Chinese street food, fired up in our own signature sauces.
            Crispy, saucy, smoky — every bite is a story from the wok.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn btn-primary" onClick={() => scrollTo('#order')}>
              Order Online
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('#menu')}>
              Explore Menu
            </button>
          </motion.div>
        </div>

        <motion.div
          ref={wokWrapRef}
          className="hero-wok-wrap"
          initial={{ opacity: 0, y: 80, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 1.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <Wok className="hero-wok-svg" />
        </motion.div>

        <motion.button
          className="hero-scroll-cue"
          onClick={() => scrollTo('#stats')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          aria-label="Scroll to next section"
        >
          <span>Scroll</span>
          <ChevronDown size={18} />
        </motion.button>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: clip;
          background: radial-gradient(ellipse 120% 80% at 50% 0%, #1a0f08 0%, #0a0604 55%);
        }
        .hero-bg-glow {
          position: absolute;
          bottom: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 77, 28, 0.22) 0%, transparent 70%);
          filter: blur(20px);
          pointer-events: none;
        }
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 90% 70% at 50% 40%, transparent 40%, rgba(10,6,4,0.7) 100%);
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          width: 100%;
          padding-top: 140px;
          padding-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero-kong {
          position: absolute;
          top: 70px;
          right: var(--gutter);
          width: clamp(80px, 11vw, 150px);
        }
        .hero-logo-wrap {
          position: relative;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-logo-glow {
          position: absolute;
          inset: -30%;
          background: radial-gradient(circle, rgba(255, 77, 28, 0.45) 0%, rgba(255, 182, 39, 0.18) 45%, transparent 75%);
          filter: blur(30px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-logo-img {
          position: relative;
          z-index: 1;
          width: clamp(190px, 22vw, 320px);
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 34px rgba(0, 0, 0, 0.55));
        }
        .hero-eyebrow {
          margin-bottom: 22px;
        }
        .hero-headline-group {
          max-width: 760px;
        }
        .hero-headline {
          font-size: clamp(3.2rem, 11vw, 8rem);
          color: var(--bone);
          margin-bottom: 28px;
        }
        .hero-sub {
          font-size: clamp(1rem, 1.6vw, 1.2rem);
          color: var(--bone-dim);
          max-width: 580px;
          margin: 0 auto 38px;
        }
        .hero-actions {
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-wok-wrap {
          margin-top: clamp(20px, 6vw, 60px);
          width: clamp(260px, 38vw, 520px);
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.6));
        }
        .hero-scroll-cue {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--bone-dim);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          animation: bob 2.2s ease-in-out infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 8px); }
        }

        @media (max-width: 640px) {
          .hero-kong { top: 96px; width: 70px; }
          .hero-inner { padding-top: 120px; }
          .hero-logo-wrap { margin-bottom: 22px; }
        }
      `}</style>
    </section>
  )
}
