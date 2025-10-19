// pages/dashboard.tsx
import { useEffect, useState } from 'react'

type Booking = { id: number; roomName: string; building: string; date: string; time: string }

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/bookings')
        const data = await res.json()
        setBookings(Array.isArray(data?.bookings) ? data.bookings : [])
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      {loading ? (
        <p>Loading…</p>
      ) : bookings.length ? (
        bookings.map((b) => (
          <div key={b.id} className="border rounded p-4">
            <h2 className="font-semibold">{b.roomName}</h2>
            <p>
              {b.building} | {b.date} | {b.time}
            </p>
          </div>
        ))
      ) : (
        <p>No bookings yet.</p>
      )}
    </main>
  )
}
