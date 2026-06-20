import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Instagram, Phone, Send } from 'lucide-react'

export default function Order() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="order" className="order section-pad">
      <div className="container order-layout">
        <motion.div
          className="order-now"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Order Now</p>
          <h2 className="order-heading">Hungry Already?</h2>
          <p className="order-sub">Order straight through WhatsApp, DM us on Instagram, or just call the kitchen.</p>

          <div className="order-channels">
            <a
              className="order-channel"
              href="https://wa.me/919915635585"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={22} />
              <div>
                <strong>WhatsApp Order</strong>
                <span>+91 99156 35585</span>
              </div>
            </a>
            <a
              className="order-channel"
              href="https://instagram.com/chingkong.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={22} />
              <div>
                <strong>Instagram</strong>
                <span>@chingkong.in</span>
              </div>
            </a>
            <a className="order-channel" href="tel:+919915635585">
              <Phone size={22} />
              <div>
                <strong>Call Now</strong>
                <span>+91 99156 35585</span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="business-query"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {submitted ? (
            <div className="query-thanks">
              <h3>Message sent!</h3>
              <p>We'll get back to you shortly at the contact you provided.</p>
            </div>
          ) : (
            <form className="query-form" onSubmit={handleSubmit}>
              <h3>Business Queries</h3>
              <div className="query-row">
                <label>
                  Name
                  <input type="text" required placeholder="Your name" />
                </label>
                <label>
                  Phone
                  <input type="tel" required placeholder="Your number" />
                </label>
              </div>
              <label>
                Email
                <input type="email" required placeholder="you@email.com" />
              </label>
              <label>
                Query Type
                <select required defaultValue="">
                  <option value="" disabled>Select a query type</option>
                  <option>Franchise / Partnership</option>
                  <option>Bulk / Catering Order</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Message
                <textarea required rows={4} placeholder="Tell us what you need" />
              </label>
              <button type="submit" className="btn btn-primary query-submit">
                Submit <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .order {
          background: var(--char);
          border-top: 1px solid rgba(245,234,216,0.06);
        }
        .order-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .order-heading {
          font-size: clamp(2rem, 4.4vw, 3.2rem);
          color: var(--bone);
          margin: 14px 0 16px;
        }
        .order-sub {
          color: var(--bone-dim);
          max-width: 420px;
          margin-bottom: 34px;
        }
        .order-channels {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .order-channel {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          background: var(--char-2);
          border: 1px solid rgba(245,234,216,0.08);
          border-radius: var(--radius-m);
          color: var(--gold);
          transition: all 0.3s var(--ease-premium);
        }
        .order-channel:hover {
          border-color: rgba(255,138,28,0.4);
          transform: translateX(6px);
        }
        .order-channel div {
          display: flex;
          flex-direction: column;
        }
        .order-channel strong {
          color: var(--bone);
          font-size: 0.98rem;
        }
        .order-channel span {
          color: var(--bone-dim);
          font-size: 0.84rem;
        }
        .business-query {
          background: linear-gradient(160deg, var(--char-2), var(--ember));
          border: 1px solid rgba(245,234,216,0.08);
          border-radius: var(--radius-l);
          padding: 36px;
        }
        .query-form h3, .query-thanks h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--bone);
          margin-bottom: 24px;
        }
        .query-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .query-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--bone-dim);
          margin-bottom: 18px;
        }
        .query-form input, .query-form textarea, .query-form select {
          padding: 13px 14px;
          border-radius: var(--radius-s);
          background: rgba(245,234,216,0.05);
          border: 1px solid rgba(245,234,216,0.14);
          font-size: 0.92rem;
          color: var(--bone);
          resize: vertical;
        }
        .query-form select option {
          background: var(--char-2);
          color: var(--bone);
        }
        .query-form input:focus, .query-form textarea:focus, .query-form select:focus {
          border-color: var(--gold);
        }
        .query-submit {
          width: 100%;
          margin-top: 6px;
        }
        .query-thanks p {
          color: var(--bone-dim);
          font-size: 0.95rem;
        }

        @media (max-width: 880px) {
          .order-layout { grid-template-columns: 1fr; }
          .query-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
