import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Leaf } from 'lucide-react'
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu.js'

export default function Menu() {
  const [active, setActive] = useState(MENU_CATEGORIES[0])

  return (
    <section id="menu" className="menu section-pad">
      <div className="container">
        <motion.p
          className="eyebrow menu-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Menu
        </motion.p>
        <motion.h2
          className="menu-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Fired, Folded, Tossed.
        </motion.h2>

        <div className="menu-tabs">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`menu-tab ${active === cat ? 'menu-tab-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="menu-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {MENU_ITEMS[active].map((item) => (
              <motion.div
                key={item.name}
                className="dish-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="dish-top">
                  <span className="veg-dot" title="Vegetarian">
                    <Leaf size={11} />
                  </span>
                  <span className="dish-price">₹{item.price}</span>
                </div>
                <h3 className="dish-name">{item.name}</h3>
                <p className="dish-desc">{item.desc}</p>
                <button className="dish-add">
                  <Plus size={15} /> Add
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .menu {
          background: var(--char);
          border-top: 1px solid rgba(245,234,216,0.06);
        }
        .menu-eyebrow { justify-content: center; display: flex; margin: 0 auto 16px; }
        .menu-heading {
          text-align: center;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          color: var(--bone);
          margin-bottom: clamp(36px, 5vw, 56px);
        }
        .menu-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 48px;
        }
        .menu-tab {
          padding: 11px 22px;
          border-radius: 999px;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--bone-dim);
          background: rgba(245,234,216,0.04);
          border: 1px solid rgba(245,234,216,0.1);
          transition: all 0.3s var(--ease-premium);
        }
        .menu-tab:hover {
          color: var(--bone);
          border-color: rgba(255,182,39,0.4);
        }
        .menu-tab-active {
          color: var(--black);
          background: linear-gradient(135deg, var(--fire), var(--gold));
          border-color: transparent;
        }
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .dish-card {
          background: linear-gradient(160deg, var(--char-2), var(--ember));
          border: 1px solid rgba(245,234,216,0.08);
          border-radius: var(--radius-m);
          padding: 26px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .dish-card:hover {
          border-color: rgba(255,138,28,0.35);
          box-shadow: 0 16px 40px -16px rgba(255,77,28,0.35);
        }
        .dish-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .veg-dot {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          border: 1.5px solid #4caf50;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4caf50;
        }
        .dish-price {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--gold);
          font-weight: 500;
        }
        .dish-name {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 1.08rem;
          text-transform: none;
          color: var(--bone);
          margin-bottom: 8px;
        }
        .dish-desc {
          font-size: 0.88rem;
          color: var(--bone-dim);
          flex: 1;
          margin-bottom: 18px;
        }
        .dish-add {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          background: rgba(255,182,39,0.1);
          color: var(--gold);
          border: 1px solid rgba(255,182,39,0.3);
          transition: all 0.3s ease;
        }
        .dish-add:hover {
          background: var(--gold);
          color: var(--black);
        }

        @media (max-width: 880px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .menu-grid { grid-template-columns: 1fr; }
          .menu-tabs { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 6px; }
        }
      `}</style>
    </section>
  )
}
