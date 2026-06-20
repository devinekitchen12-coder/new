import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send } from 'lucide-react'

const REVIEWS = [
  { name: 'Ananya Sharma', rating: 5, text: 'The chilli garlic momos are unreal. You can taste that it\u2019s their own sauce, not something out of a bottle.' },
  { name: 'Rohit Mehra', rating: 5, text: 'Wok tossed noodles tasted like a proper street cart in Bangkok. Panchkula needed this badly.' },
  { name: 'Simran Kaur', rating: 4, text: 'Kothey momos were crisp on the bottom and so juicy inside. Packaging felt premium too.' },
]

export default function Reviews() {
  const [rating, setRating] = useState(5)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reviews" className="reviews section-pad">
      <div className="container">
        <motion.p
          className="eyebrow reviews-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Reviews
        </motion.p>
        <motion.h2
          className="reviews-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          What People Say
        </motion.h2>

        <div className="reviews-layout">
          <div className="reviews-list">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.name}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} fill={idx < r.rating ? '#ffb627' : 'none'} color="#ffb627" />
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <span className="review-name">{r.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="review-form-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="review-thanks">
                <h3>Thank you!</h3>
                <p>Your review has been received. We appreciate you taking the time to share it.</p>
              </div>
            ) : (
              <form className="review-form" onSubmit={handleSubmit}>
                <h3>Leave a Review</h3>
                <label>
                  Name
                  <input type="text" required placeholder="Your name" />
                </label>
                <label>
                  Rating
                  <div className="rating-picker">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setRating(idx + 1)}
                        aria-label={`Rate ${idx + 1} stars`}
                      >
                        <Star size={20} fill={idx < rating ? '#ffb627' : 'none'} color="#ffb627" />
                      </button>
                    ))}
                  </div>
                </label>
                <label>
                  Review
                  <textarea required placeholder="Tell us about your experience" rows={4} />
                </label>
                <button type="submit" className="btn btn-primary review-submit">
                  Submit Review <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .reviews {
          background: var(--char);
          border-top: 1px solid rgba(245,234,216,0.06);
        }
        .reviews-eyebrow { justify-content: center; display: flex; margin: 0 auto 16px; }
        .reviews-heading {
          text-align: center;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          color: var(--bone);
          margin-bottom: clamp(36px, 5vw, 56px);
        }
        .reviews-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .review-card {
          background: var(--char-2);
          border: 1px solid rgba(245,234,216,0.08);
          border-radius: var(--radius-m);
          padding: 26px;
        }
        .review-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 14px;
        }
        .review-text {
          color: var(--bone-dim);
          font-size: 0.96rem;
          margin-bottom: 16px;
        }
        .review-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--bone);
        }
        .review-form-wrap {
          background: linear-gradient(160deg, var(--char-2), var(--ember));
          border: 1px solid rgba(245,234,216,0.08);
          border-radius: var(--radius-l);
          padding: 32px;
        }
        .review-form h3, .review-thanks h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--bone);
          margin-bottom: 22px;
        }
        .review-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--bone-dim);
          margin-bottom: 18px;
        }
        .review-form input, .review-form textarea {
          padding: 13px 14px;
          border-radius: var(--radius-s);
          background: rgba(245,234,216,0.05);
          border: 1px solid rgba(245,234,216,0.14);
          font-size: 0.92rem;
          color: var(--bone);
          resize: vertical;
        }
        .review-form input:focus, .review-form textarea:focus {
          border-color: var(--gold);
        }
        .rating-picker {
          display: flex;
          gap: 6px;
        }
        .rating-picker button {
          padding: 4px;
        }
        .review-submit {
          width: 100%;
          margin-top: 6px;
        }
        .review-thanks p {
          color: var(--bone-dim);
          font-size: 0.95rem;
        }

        @media (max-width: 880px) {
          .reviews-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
