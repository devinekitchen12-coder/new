import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const STATS = [
  { value: 20, suffix: '+', label: 'Wok Fired Dishes' },
  { value: null, display: 'House', label: 'Signature Sauces' },
  { value: null, display: 'Daily', label: 'Freshly Tossed' },
  { value: null, display: 'Bold', label: 'Indo-Chinese Flavours' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="stats section-pad">
      <div className="container">
        <motion.h2
          className="stats-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Loved by People.<br />Made in Our Own Sauces.
        </motion.h2>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stat-value">
                {s.value !== null ? <Counter value={s.value} suffix={s.suffix} /> : s.display}
              </div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stats {
          position: relative;
          background: var(--char);
          border-top: 1px solid rgba(245,234,216,0.06);
          border-bottom: 1px solid rgba(245,234,216,0.06);
        }
        .stats-heading {
          font-size: clamp(2rem, 5vw, 3.4rem);
          text-align: center;
          color: var(--bone);
          max-width: 640px;
          margin: 0 auto clamp(50px, 8vw, 90px);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(245,234,216,0.08);
          border-radius: var(--radius-l);
          overflow: hidden;
        }
        .stat-card {
          background: var(--char-2);
          padding: 44px 24px;
          text-align: center;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3rem);
          background: linear-gradient(135deg, var(--gold), var(--fire));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 10px;
        }
        .stat-label {
          font-size: 0.88rem;
          color: var(--bone-dim);
          font-weight: 600;
        }

        @media (max-width: 760px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
