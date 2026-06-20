/**
 * Kong — the brand's flame-spirit mascot.
 * An original, geometric ember-being (not a literal animal/character reference):
 * a rounded charcoal body with a glowing crack pattern and two simple ember eyes,
 * holding/tossing food. Kept abstract and iconographic, like a logomark come alive.
 */
export default function Kong({ className = '' }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <radialGradient id="kongBody" cx="40%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#2c2018" />
          <stop offset="100%" stopColor="#100a06" />
        </radialGradient>
        <linearGradient id="kongCrack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd76a" />
          <stop offset="100%" stopColor="#ff4d1c" />
        </linearGradient>
      </defs>

      {/* body — rounded charcoal blob, slightly irregular for warmth */}
      <path
        d="M200 60 C280 60 330 120 330 200 C330 270 290 330 200 340 C110 330 70 270 70 200 C70 120 120 60 200 60 Z"
        fill="url(#kongBody)"
      />

      {/* glowing crack lines across the body */}
      <g stroke="url(#kongCrack)" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M150 110 L175 160 L140 190" />
        <path d="M260 120 L235 165 L270 200" />
        <path d="M150 280 L185 250 L170 300" />
      </g>

      {/* ember eyes */}
      <ellipse cx="160" cy="190" rx="16" ry="20" fill="#ff8a1c" />
      <ellipse cx="240" cy="190" rx="16" ry="20" fill="#ff8a1c" />
      <ellipse cx="160" cy="190" rx="7" ry="9" fill="#ffe9b0" />
      <ellipse cx="240" cy="190" rx="7" ry="9" fill="#ffe9b0" />

      {/* small flame crown */}
      <path d="M185 65 C182 45 195 35 200 20 C205 35 218 45 215 65 C212 55 205 50 200 58 C195 50 188 55 185 65 Z" fill="url(#kongCrack)" />
    </svg>
  )
}
