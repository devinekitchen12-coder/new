import { motion } from 'framer-motion'
import { Flame, Soup, Sparkles, ChefHat, Heart, Zap } from 'lucide-react'

const FEATURES = [
  { icon: Soup, title: 'Signature Sauces', desc: 'Every dish is built on house-made sauces — never bottled, never generic.' },
  { icon: Flame, title: 'Wok Fired Fresh', desc: 'Cooked to order over high flame, the way Indo-Chinese street food should be.' },
  { icon: Sparkles, title: 'Crispy + Saucy Flavours', desc: 'A balance of crunch and glaze in every bite, fired and tossed to order.' },
  { icon: ChefHat, title: 'Street Food, Premium Feel', desc: 'Bold street flavours, plated and packaged with a premium standard.' },
  { icon: Heart, title: 'Made With Passion', desc: 'Built from years of dreaming and stirring the wok — not just a menu.' },
  { icon: Zap, title: 'Perfect For Young Food Lovers', desc: 'Loud flavours, fast service, made for a generation that wants both.' },
]

export default function WhyChoose() {
  return (
    <section id="why" className="why section-pad">
      <div className="container">
        <motion.p
          className="eyebrow why-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Ching Kong
        </motion.p>
        <motion.h2
          className="why-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Built Different. Fired Right.
        </motion.h2>

        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="why-icon">
                <f.icon size={22} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .why {
          background: var(--black);
        }
        .why-eyebrow { justify-content: center; display: flex; margin: 0 auto 16px; }
        .why-heading {
          text-align: center;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          color: var(--bone);
          margin-bottom: clamp(36px, 5vw, 56px);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .why-card {
          background: var(--char-2);
          border: 1px solid rgba(245,234,216,0.08);
          border-radius: var(--radius-m);
          padding: 30px 26px;
          transition: border-color 0.3s ease, transform 0.3s var(--ease-premium);
        }
        .why-card:hover {
          border-color: rgba(255,138,28,0.35);
          transform: translateY(-5px);
        }
        .why-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(255,77,28,0.18), rgba(255,182,39,0.12));
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .why-card h3 {
          font-family: var(--font-body);
          font-weight: 700;
          text-transform: none;
          font-size: 1.05rem;
          color: var(--bone);
          margin-bottom: 8px;
        }
        .why-card p {
          font-size: 0.88rem;
          color: var(--bone-dim);
        }

        @media (max-width: 880px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
