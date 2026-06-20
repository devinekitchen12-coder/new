import Wok from '../components/Wok.jsx'
import logo from '../assets/logo.png'

const EXPLORE = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
]

const ACTIONS = [
  { label: 'Reserve Table', href: '#order' },
  { label: 'Order Online', href: '#order' },
  { label: 'Business Queries', href: '#order' },
  { label: 'Contact Us', href: '#visit' },
]

export default function Footer() {
  const scrollTo = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Ching Kong — Our Wok Talks" className="footer-logo-img" />
            <p>
              Indo-Chinese street food, fired in our own signature sauces.
              From dreams to woks — built with passion in Panchkula.
            </p>
            <Wok className="footer-wok-svg" />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {EXPLORE.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={scrollTo(l.href)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Actions</h4>
            <ul>
              {ACTIONS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={scrollTo(l.href)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visit Us</h4>
            <ul className="footer-contact">
              <li>📍 Panchkula, Haryana</li>
              <li>📞 +91 99156 35585</li>
              <li>🕒 11:00 AM – 11:00 PM</li>
              <li>✉️ hello@chingkong.in</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ching Kong. All rights reserved.</span>
          <span>Our Wok Talks.</span>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          background: #050302;
          border-top: 1px solid rgba(245,234,216,0.07);
          padding-top: clamp(60px, 8vw, 100px);
          overflow: clip;
        }
        .footer-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,77,28,0.12), transparent 70%);
          pointer-events: none;
        }
        .footer-inner {
          position: relative;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr 1fr;
          gap: 40px;
          padding-bottom: 50px;
        }
        .footer-brand {
          position: relative;
        }
        .footer-logo-img {
          height: clamp(44px, 5vw, 60px);
          width: auto;
          object-fit: contain;
          margin-bottom: 18px;
        }
        .footer-brand p {
          color: var(--bone-dim);
          font-size: 0.92rem;
          max-width: 320px;
        }
        .footer-wok-svg {
          position: absolute;
          bottom: -30px;
          right: 10px;
          width: 90px;
          opacity: 0.18;
          pointer-events: none;
        }
        .footer-col h4 {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
        }
        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-col a {
          color: var(--bone-dim);
          font-size: 0.92rem;
          transition: color 0.3s ease;
        }
        .footer-col a:hover { color: var(--bone); }
        .footer-contact li {
          color: var(--bone-dim);
          font-size: 0.92rem;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding: 22px 0;
          border-top: 1px solid rgba(245,234,216,0.07);
          font-size: 0.8rem;
          color: var(--bone-dim);
        }

        @media (max-width: 880px) {
          .footer-top { grid-template-columns: repeat(2, 1fr); gap: 36px; }
          .footer-brand { grid-column: span 2; }
          .footer-wok-svg { display: none; }
        }
        @media (max-width: 560px) {
          .footer-top { grid-template-columns: 1fr; }
          .footer-brand { grid-column: span 1; }
          .footer-bottom { flex-direction: column; gap: 8px; padding-bottom: 90px; }
        }
      `}</style>
    </footer>
  )
}
