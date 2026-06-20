import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.png'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-inner container">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNav('#home') }}>
            <img src={logo} alt="Ching Kong — Our Wok Talks" className="nav-logo-img" />
          </a>

          <nav className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href) }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="tel:+919915635585" className="nav-call">
              <Phone size={15} /> <span>Call</span>
            </a>
            <button className="btn btn-primary nav-order" onClick={() => handleNav('#order')}>
              Order Online
            </button>
            <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        className="nav-mobile"
        initial={false}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <button className="nav-mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={26} />
        </button>
        <div className="nav-mobile-links">
          {LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
              initial={{ opacity: 0, x: 20 }}
              animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
        <button className="btn btn-primary nav-mobile-order" onClick={() => handleNav('#order')}>
          Order Online
        </button>
      </motion.div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 22px 0;
          transition: padding 0.4s var(--ease-premium), background 0.4s var(--ease-premium), backdrop-filter 0.4s ease;
        }
        .nav-scrolled {
          padding: 13px 0;
          background: rgba(10, 6, 4, 0.75);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(245, 234, 216, 0.08);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .nav-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .nav-logo-img {
          height: clamp(40px, 5vw, 56px);
          width: auto;
          object-fit: contain;
          transition: height 0.4s var(--ease-premium);
        }
        .nav-scrolled .nav-logo-img {
          height: clamp(34px, 4vw, 46px);
        }
        .nav-links {
          display: flex;
          gap: 34px;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .nav-links a {
          position: relative;
          color: var(--bone-dim);
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--bone);
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.35s var(--ease-premium);
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
        }
        .nav-call {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--bone-dim);
        }
        .nav-order {
          padding: 11px 24px;
          font-size: 0.85rem;
        }
        .nav-burger {
          display: none;
          color: var(--bone);
        }

        @media (max-width: 920px) {
          .nav-links { display: none; }
          .nav-call { display: none; }
          .nav-order { display: none; }
          .nav-burger { display: block; }
        }

        .nav-mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: min(86vw, 360px);
          height: 100vh;
          z-index: 200;
          background: linear-gradient(160deg, #160d09 0%, #0a0604 100%);
          border-left: 1px solid rgba(245, 234, 216, 0.08);
          display: flex;
          flex-direction: column;
          padding: 28px 32px;
          box-shadow: -30px 0 60px rgba(0,0,0,0.5);
        }
        .nav-mobile-close {
          align-self: flex-end;
          color: var(--bone);
          margin-bottom: 40px;
        }
        .nav-mobile-links {
          display: flex;
          flex-direction: column;
          gap: 26px;
          font-family: var(--font-display);
          font-size: 1.7rem;
          letter-spacing: 0.02em;
        }
        .nav-mobile-links a { color: var(--bone); }
        .nav-mobile-order {
          margin-top: auto;
          width: 100%;
          padding: 16px;
        }
      `}</style>
    </>
  )
}
