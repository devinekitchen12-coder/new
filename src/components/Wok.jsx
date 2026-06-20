import { forwardRef } from 'react'

/**
 * The Wok — signature visual element of the site.
 * A single hand-built SVG: wok body, handles, flame tongues, steam wisps.
 * Designed to be transformed (rotate/scale/translate) by GSAP/Framer from outside.
 */
const Wok = forwardRef(function Wok({ className = '', flameOpacity = 1, smokeOpacity = 1 }, ref) {
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="wokMetal" cx="50%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="45%" stopColor="#2b2b2b" />
          <stop offset="100%" stopColor="#0c0c0c" />
        </radialGradient>
        <radialGradient id="wokInner" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#3a1a0a" />
          <stop offset="60%" stopColor="#180a04" />
          <stop offset="100%" stopColor="#050201" />
        </radialGradient>
        <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ff4d1c" />
          <stop offset="55%" stopColor="#ff8a1c" />
          <stop offset="100%" stopColor="#ffd76a" />
        </linearGradient>
        <radialGradient id="emberGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4d1c" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ff4d1c" stopOpacity="0" />
        </radialGradient>
        <filter id="wokBlurSm"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="wokBlurLg"><feGaussianBlur stdDeviation="14" /></filter>
      </defs>

      {/* Ambient glow under wok */}
      <ellipse cx="300" cy="430" rx="230" ry="70" fill="url(#emberGlow)" opacity={flameOpacity} />

      {/* Flames (rendered behind wok body, tongues lick up around the base) */}
      <g opacity={flameOpacity} filter="url(#wokBlurSm)">
        <path className="flame-tongue flame-1" d="M230 420 C220 370, 250 350, 245 310 C265 340, 280 360, 270 400 C290 380, 295 350, 285 320 C310 355, 305 395, 280 420 Z" fill="url(#flameGrad)" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }} />
        <path className="flame-tongue flame-2" d="M300 425 C292 365, 320 340, 312 295 C335 330, 350 355, 338 400 C360 375, 362 340, 348 305 C375 345, 370 395, 340 425 Z" fill="url(#flameGrad)" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }} />
        <path className="flame-tongue flame-3" d="M370 420 C362 375, 388 355, 380 320 C400 348, 410 368, 400 405 C418 388, 420 360, 410 335 C430 365, 425 400, 400 420 Z" fill="url(#flameGrad)" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }} />
      </g>

      {/* Wok body */}
      <g>
        {/* handles */}
        <rect x="60" y="365" width="100" height="22" rx="11" fill="#1b1b1b" transform="rotate(-6 110 376)" />
        <rect x="440" y="365" width="100" height="22" rx="11" fill="#1b1b1b" transform="rotate(6 490 376)" />
        <circle cx="68" cy="376" r="14" fill="#0c0c0c" />
        <circle cx="532" cy="376" r="14" fill="#0c0c0c" />

        {/* outer bowl */}
        <path
          d="M95 370 C95 460, 180 510, 300 510 C420 510, 505 460, 505 370 L470 350 C470 420, 400 460, 300 460 C200 460, 130 420, 130 350 Z"
          fill="url(#wokMetal)"
        />
        {/* rim highlight */}
        <path
          d="M95 370 C95 365, 130 350, 300 350 C470 350, 505 365, 505 370 C505 378, 420 392, 300 392 C180 392, 95 378, 95 370 Z"
          fill="#6b6b6b"
          opacity="0.5"
        />
        {/* inner bowl (dark, holds food/glow) */}
        <path
          d="M130 358 C130 420, 200 452, 300 452 C400 452, 470 420, 470 358 C470 372, 400 384, 300 384 C200 384, 130 372, 130 358 Z"
          fill="url(#wokInner)"
        />
      </g>

      {/* Smoke wisps */}
      <g opacity={smokeOpacity} filter="url(#wokBlurLg)">
        <path className="smoke-wisp smoke-1" d="M250 330 C240 290, 270 270, 255 230 C275 250, 290 270, 275 310 Z" fill="#f5ead8" opacity="0.18" />
        <path className="smoke-wisp smoke-2" d="M340 320 C335 275, 365 255, 352 210 C375 235, 385 260, 368 305 Z" fill="#f5ead8" opacity="0.14" />
      </g>
    </svg>
  )
})

export default Wok
