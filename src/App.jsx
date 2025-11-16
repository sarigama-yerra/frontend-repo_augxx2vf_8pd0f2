import { useRef } from 'react'
import Hero from './components/Hero'
import RestaurantSearch from './components/RestaurantSearch'
import Events from './components/Events'
import OwnerDashboard from './components/OwnerDashboard'
import Footer from './components/Footer'

function App() {
  const exploreRef = useRef(null)
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Hero onExplore={() => exploreRef.current?.scrollIntoView({behavior:'smooth'})} />
      <div ref={exploreRef}>
        <RestaurantSearch />
      </div>
      <Events />
      <OwnerDashboard />
      <Footer />
    </div>
  )
}

export default App
