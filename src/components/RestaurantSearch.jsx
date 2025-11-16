import { useEffect, useState } from 'react'
import { MapPin, Search, Filter, Star } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function RestaurantSearch() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [coords, setCoords] = useState(null)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude })
      })
    }
  }, [])

  async function search() {
    setLoading(true)
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (city) params.set('city', city)
    if (cuisine) params.set('cuisine', cuisine)
    if (coords) {
      params.set('lat', coords.lat)
      params.set('lng', coords.lng)
      params.set('radius_km', '10')
    }
    const res = await fetch(`${API}/restaurants?${params.toString()}`)
    const data = await res.json()
    setItems(data)
    setLoading(false)
  }

  useEffect(() => { search() }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
        <div className="grid md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <Search size={18}/>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search name or dish" className="w-full outline-none" />
          </div>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <MapPin size={18}/>
            <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City (e.g., Tirana)" className="w-full outline-none" />
          </div>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <Filter size={18}/>
            <input value={cuisine} onChange={e=>setCuisine(e.target.value)} placeholder="Cuisine (e.g., seafood)" className="w-full outline-none" />
          </div>
          <button onClick={search} className="bg-emerald-600 text-white rounded-lg font-semibold px-4">Search</button>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && <div className="text-gray-500">Loading...</div>}
          {!loading && items.map(r => (
            <div key={r._id} className="border rounded-xl p-4 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{r.name}</h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16}/> <span className="text-sm">{r.avg_rating?.toFixed ? r.avg_rating.toFixed(1) : r.avg_rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{r.city} • {r.cuisine?.join(', ')}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{r.description}</p>
              <div className="mt-3 flex gap-2">
                <a className="text-emerald-700 font-medium" href={`/#/r/${r._id}`}>View</a>
                {r.accepts_reservations && <a className="text-blue-700 font-medium" href={`/#/r/${r._id}#reserve`}>Reserve</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
