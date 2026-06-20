import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

export default function StickyOrderButton() {
  return (
    <>
      <motion.a
        href="#order"
        className="sticky-order"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <ShoppingBag size={18} />
        Order Online
      </motion.a>

      <style>{`
        .sticky-order {
          display: none;
        }
        @media (max-width: 760px) {
          .sticky-order {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            position: fixed;
            bottom: 18px;
            left: 16px;
            right: 16px;
            z-index: 90;
            padding: 16px;
            border-radius: 999px;
            background: linear-gradient(135deg, var(--fire) 0%, var(--gold) 100%);
            color: var(--black);
            font-weight: 700;
            font-size: 0.95rem;
            box-shadow: 0 10px 35px -6px rgba(255, 77, 28, 0.65);
          }
        }
      `}</style>
    </>
  )
}
