import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const INFO = [
  { icon: MapPin, label: 'Location', value: 'Panchkula, Haryana' },
  { icon: Phone, label: 'Phone', value: '+91 99156 35585' },
  { icon: Clock, label: 'Timing', value: '11:00 AM – 11:00 PM' },
  { icon: Mail, label: 'Email', value: 'hello@chingkong.in' },
]

export default function Visit() {
  return (
    <section id="visit" className="visit section-pad">
      <div className="container visit-layout">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Visit Us</p>
          <h2 className="visit-heading">Come Say Hello</h2>

          <div className="visit-info">
            {INFO.map((item) => (
              <div className="visit-item" key={item.label}>
                <div className="visit-icon">
                  <item.icon size={18} />
                </div>
                <div>
                  <span className="visit-label">{item.label}</span>
                  <span className="visit-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="map-placeholder"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MapPin size={28} />
          <span>Google Map — Panchkula, Haryana</span>
        </motion.div>
      </div>

      <style>{`
        .visit {
          background: var(--black);
        }
        .visit-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(36px, 6vw, 70px);
          align-items: center;
        }
        .visit-heading {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          color: var(--bone);
          margin: 14px 0 36px;
        }
        .visit-info {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .visit-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .visit-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(255,77,28,0.18), rgba(255,182,39,0.12));
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .visit-label {
          display: block;
          font-size: 0.78rem;
          color: var(--bone-dim);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .visit-value {
          display: block;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--bone);
        }
        .map-placeholder {
          height: clamp(280px, 36vw, 420px);
          border-radius: var(--radius-l);
          background: linear-gradient(160deg, var(--char-2), var(--ember));
          border: 1px solid rgba(245,234,216,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: var(--bone-dim);
        }
        .map-placeholder span {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.05em;
        }

        @media (max-width: 880px) {
          .visit-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
