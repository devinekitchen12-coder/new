import { useState } from 'react'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import StickyOrderButton from './components/StickyOrderButton.jsx'
import Hero from './sections/Hero.jsx'
import Stats from './sections/Stats.jsx'
import Story from './sections/Story.jsx'
import Menu from './sections/Menu.jsx'
import Gallery from './sections/Gallery.jsx'
import Reviews from './sections/Reviews.jsx'
import WhyChoose from './sections/WhyChoose.jsx'
import Order from './sections/Order.jsx'
import Visit from './sections/Visit.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Story />
        <Menu />
        <Gallery />
        <Reviews />
        <WhyChoose />
        <Order />
        <Visit />
      </main>
      <Footer />
      <StickyOrderButton />
    </>
  )
}
