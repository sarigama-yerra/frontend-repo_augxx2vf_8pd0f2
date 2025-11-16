import { MapPin, Percent, Calendar, Sparkles } from 'lucide-react'

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm mb-4">
              <Sparkles size={16} /> New in Albania
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              TouristTable
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Real-time trusted reviews, location-based recommendations, festival updates and exclusive discounts — all tailored for Albania.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={onExplore} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-semibold transition">
                Explore Restaurants
              </button>
              <a href="#owner" className="px-5 py-3 rounded-lg font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
                For Restaurant Owners
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><MapPin size={18}/> GPS-Based</div>
              <div className="flex items-center gap-2"><Calendar size={18}/> Local Events</div>
              <div className="flex items-center gap-2"><Percent size={18}/> Tourist Deals</div>
            </div>
          </div>
          <div className="lg:pl-10">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <img src="https://images.unsplash.com/photo-1681747971551-ab583c97d677?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbGJhbmlhbiUyMGN1aXNpbmV8ZW58MHwwfHx8MTc2MzMxNjY3N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Albanian cuisine" className="rounded-lg w-full object-cover h-64" />
              <p className="mt-3 text-gray-500 text-sm">Taste the best of Albania: from coastal seafood to mountain specialties.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
