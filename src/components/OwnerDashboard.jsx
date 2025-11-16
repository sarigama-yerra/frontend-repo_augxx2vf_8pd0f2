import { useEffect, useState } from 'react'
import { BarChart2, Users, Megaphone, Calendar } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function OwnerDashboard() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    async function load() {
      const res = await fetch(`${API}/analytics/overview`)
      const data = await res.json()
      setStats(data)
    }
    load()
  }, [])

  return (
    <section id="owner" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border p-5">
          <div className="flex items-center gap-2 text-gray-700"><BarChart2/> Analytics</div>
          <p className="text-sm text-gray-500 mt-2">Track restaurants by city and cuisine.</p>
          <pre className="mt-3 text-xs bg-gray-50 p-3 rounded overflow-auto max-h-56">{JSON.stringify(stats, null, 2)}</pre>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <div className="flex items-center gap-2 text-gray-700"><Users/> Reservations</div>
          <p className="text-sm text-gray-500 mt-2">Manage bookings and waitlists in one place.</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <div className="flex items-center gap-2 text-gray-700"><Megaphone/> Campaigns</div>
          <p className="text-sm text-gray-500 mt-2">Launch targeted offers to tourists by city or cuisine.</p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Grow with TouristTable Pro</h3>
          <p className="text-sm opacity-90">Subscriptions, promoted listings, and commission on reservations.</p>
        </div>
        <a href="#" className="bg-white text-emerald-700 font-semibold px-4 py-2 rounded-lg">Get Started</a>
      </div>

      <div className="mt-8 bg-white border rounded-xl p-5">
        <div className="flex items-center gap-2 text-gray-700"><Calendar/> Events & Food Festivals</div>
        <p className="text-sm text-gray-500 mt-2">Keep your calendar updated to tap into seasonal tourist flows.</p>
      </div>
    </section>
  )
}
