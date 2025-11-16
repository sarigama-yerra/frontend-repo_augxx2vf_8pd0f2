import { useEffect, useState } from 'react'
import { Calendar, MapPin } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Events() {
  const [city, setCity] = useState('')
  const [items, setItems] = useState([])

  async function load() {
    const params = new URLSearchParams()
    if (city) params.set('city', city)
    const res = await fetch(`${API}/events?${params.toString()}`)
    const data = await res.json()
    setItems(data)
  }

  useEffect(()=>{ load() }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl border p-5">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <MapPin size={18}/>
            <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City" className="w-full outline-none"/>
          </div>
          <button onClick={load} className="bg-blue-600 text-white rounded-lg px-4 py-2">Find Events</button>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(ev => (
            <div key={ev._id} className="border rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-700"><Calendar size={18}/> <span className="font-semibold">{ev.title}</span></div>
              <p className="text-sm text-gray-600">{ev.city} • {ev.date}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">{ev.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
