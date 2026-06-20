import { motion } from 'framer-motion'
import Wok from '../components/Wok.jsx'

const paragraphs = [
  'Cooking is my way of bringing people together.',
  'My journey started with YouTube — where I learned creativity, storytelling, and the power of connecting with people. From there, I stepped into event management, working on concerts, festivals, and curated trips, picking up leadership, operations, and what truly makes a guest smile.',
  'Through every project, one passion stayed constant — food. Ching Kong is the result of years of dreaming, learning, and stirring the wok. It\u2019s a brand built on passion, hard work, and a promise to create memorable experiences through great food.',
]

export default function Story() {
  return (
    <section id="story" className="story section-pad">
      <div className="container story-grid">
        <motion.div
          className="story-visual"
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Wok className="story-wok-svg" />
        </motion.div>

        <div className="story-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            From Dreams to Wok
          </motion.p>

          <motion.h2
            className="story-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Every dish carries<br />a piece of the journey.
          </motion.h2>

          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="story-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      <style>{`
        .story {
          position: relative;
          background: var(--black);
        }
        .story-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: clamp(40px, 6vw, 100px);
          align-items: center;
        }
        .story-visual {
          position: relative;
        }
        .story-wok-svg {
          width: 100%;
          filter: drop-shadow(0 20px 50px rgba(255,77,28,0.15));
        }
        .story-heading {
          font-size: clamp(1.9rem, 3.4vw, 2.8rem);
          color: var(--bone);
          margin: 16px 0 30px;
        }
        .story-text {
          color: var(--bone-dim);
          font-size: 1.02rem;
          max-width: 560px;
          margin-bottom: 20px;
        }
        .story-text:first-of-type {
          color: var(--bone);
          font-weight: 600;
          font-size: 1.15rem;
        }

        @media (max-width: 880px) {
          .story-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .story-visual { max-width: 280px; margin: 0 auto; }
          .story-text { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  )
}
