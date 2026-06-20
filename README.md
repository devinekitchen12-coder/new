# CHING KONG — "Our Wok Talks"

Premium, cinematic, scroll-animated website for the CHING KONG Indo-Chinese street food brand.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Stack

- React 18 + Vite
- Framer Motion (entrance/scroll reveals, UI motion)
- GSAP + ScrollTrigger (hero scroll-scrub, ambient flame/smoke loops)
- lucide-react (icons)
- Plain CSS with a design-token system in `src/index.css` (no Tailwind/UI kit)

## Structure

```
src/
  assets/       logo.png — the official CHING KONG logo (transparent PNG)
  components/   Wok.jsx, Kong.jsx, Nav.jsx, Loader.jsx, StickyOrderButton.jsx
  sections/     Hero, Stats, Story, Menu, Gallery, Reviews, WhyChoose, Order, Visit, Footer
  data/         menu.js — dish/category data, edit here to change the menu
  index.css     design tokens (colors, type, spacing) + global styles
  App.jsx       assembles all sections
public/
  favicon.ico, favicon-16.png, favicon-32.png, favicon-192.png  — favicon set
  apple-touch-icon.png   — iOS home-screen icon
  og-image.png           — 1200×630 social sharing preview image
  site.webmanifest       — PWA/home-screen metadata
```

## About the logo

The uploaded sticker-style logo had a faint checkerboard pattern baked into its pixels (not real transparency) and a white die-cut border. Both were removed programmatically to produce `src/assets/logo.png` — a clean, sharp, truly transparent PNG used everywhere: navbar, hero, loading screen, and footer.

The favicon is a separate, simplified asset (just the bold red "C") cropped from the same logo, since the full wordmark turns illegible at 16–32px browser-tab sizes — this is standard practice for wordmark-style logos.

**Before going live**, update the Open Graph/Twitter meta tags in `index.html` (`og:image`, `twitter:image`) to use your **full domain URL** (e.g. `https://chingkong.in/og-image.png`) instead of the relative `/og-image.png` path — social platforms (WhatsApp, Facebook, Twitter/X) require absolute URLs to fetch preview images correctly.

## Things to swap in before launch

- **Real food photography**: replace the placeholder tiles in `Gallery.jsx` and dish cards in `Menu.jsx`/`data/menu.js` with real `<img>` sources.
- **Google Map**: `Visit.jsx` has a placeholder block — swap for a real embed (`<iframe>` with your Google Maps share link) once you have the exact pin location.
- **Instagram handle**: `Order.jsx` currently links to `instagram.com/chingkong.in` as a placeholder — update to your real handle.
- **Forms**: the Review form and Business Query form in `Reviews.jsx` / `Order.jsx` currently just show a local "submitted" state. Wire `onSubmit` to your backend, form service (e.g. Formspree), or WhatsApp/email API of choice.
- **Prices**: all prices in `data/menu.js` are placeholders — update freely.

## Notes on the animation system

- The hero wok and mascot ("Kong") are hand-built SVGs with looping GSAP animations for flame flicker, smoke drift, and idle float — no external assets needed.
- Scrolling the hero scrubs the wok/mascot up and away (tilt, scale, fade) via `ScrollTrigger`, mimicking an Apple-style product reveal exit.
- All section entrances use Framer Motion `whileInView` reveals, tuned with the same easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for a consistent premium feel site-wide.
- Reduced-motion is respected globally via `prefers-reduced-motion` in `index.css`.
