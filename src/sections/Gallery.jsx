import { motion } from 'framer-motion'

const GALLERY = [
  { name: 'Chilli Garlic Momos', tag: 'Steamed' },
  { name: 'Crispy Fried Momos', tag: 'Fried' },
  { name: 'Honey Chilli Cauliflower', tag: 'Wok Tossed' },
  { name: 'Chilli Paneer', tag: 'Wok Tossed' },
  { name: 'Kothey Momos', tag: 'Pan Seared' },
  { name: 'Wok Tossed Noodles', tag: 'Signature' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section-pad">
      <div className="container">
        <motion.p
          className="eyebrow gallery-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Gallery
        </motion.p>
        <motion.h2
          className="gallery-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Plated. Fired. Devoured.
        </motion.h2>

        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <motion.div
              key={g.name}
              className={`gallery-card ${i === 0 || i === 3 ? 'gallery-card-tall' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="gallery-placeholder">
                <div className="gallery-splash" />
                <span className="gallery-placeholder-label">Food Photo</span>
              </div>
              <div className="gallery-caption">
                <span className="gallery-tag">{g.tag}</span>
                <h3>{g.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery {
          background: var(--black);
        }
        .gallery-eyebrow { justify-content: center; display: flex; margin: 0 auto 16px; }
        .gallery-heading {
          text-align: center;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          color: var(--bone);
          margin-bottom: clamp(36px, 5vw, 56px);
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 260px;
          gap: 18px;
        }
        .gallery-card-tall {
          grid-row: span 2;
        }
        .gallery-card {
          position: relative;
          border-radius: var(--radius-m);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .gallery-placeholder {
          position: relative;
          flex: 1;
          background: linear-gradient(160deg, #241409 0%, #120a05 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .gallery-placeholder-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          color: rgba(245,234,216,0.3);
          text-transform: uppercase;
          z-index: 1;
        }
        .gallery-splash {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 30%, rgba(255,77,28,0.35), transparent 45%),
                      radial-gradient(circle at 70% 70%, rgba(255,182,39,0.25), transparent 50%);
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.6s var(--ease-premium), transform 0.6s var(--ease-premium);
        }
        .gallery-card:hover .gallery-splash {
          opacity: 1;
          transform: scale(1);
        }
        .gallery-card:hover .gallery-placeholder {
          transform: scale(1.04);
        }
        .gallery-placeholder {
          transition: transform 0.6s var(--ease-premium);
        }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 18px 20px;
          background: linear-gradient(to top, rgba(10,6,4,0.92), transparent);
        }
        .gallery-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .gallery-caption h3 {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 1rem;
          text-transform: none;
          color: var(--bone);
          margin-top: 4px;
        }

        @media (max-width: 880px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 220px; }
        }
        @media (max-width: 560px) {
          .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
          .gallery-card-tall { grid-row: span 1; }
        }
      `}</style>
    </section>
  )
}
