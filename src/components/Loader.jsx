import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Wok from './Wok.jsx'
import logo from '../assets/logo.png'

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 700)
    }, 1900)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.div
            className="loader-wok"
            initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Wok className="loader-wok-svg" />
          </motion.div>
          <motion.img
            src={logo}
            alt="Ching Kong"
            className="loader-logo-img"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="loader-bar-track"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="loader-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          <style>{`
            .loader {
              position: fixed;
              inset: 0;
              z-index: 1000;
              background: radial-gradient(circle at 50% 38%, #1a0f08 0%, #0a0604 70%);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 22px;
            }
            .loader-wok-svg {
              width: clamp(90px, 16vw, 160px);
              height: auto;
              filter: drop-shadow(0 0 40px rgba(255, 77, 28, 0.55));
            }
            .loader-logo-img {
              width: clamp(220px, 38vw, 380px);
              height: auto;
              object-fit: contain;
              filter: drop-shadow(0 0 30px rgba(255, 138, 28, 0.45));
            }
            .loader-bar-track {
              width: 180px;
              height: 2px;
              background: rgba(245, 234, 216, 0.15);
              border-radius: 2px;
              overflow: hidden;
            }
            .loader-bar-fill {
              height: 100%;
              width: 100%;
              transform-origin: left;
              background: linear-gradient(90deg, var(--fire), var(--gold));
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
