import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch('/api/bookings').then(res => res.json()).then(data => setBookings(data.bookings));
  }, []);

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      {bookings.length ? bookings.map(b => (
        <div key={b.id} className="border rounded p-4">
          <h2 className="font-semibold">{b.roomName}</h2>
          <p>{b.building} | {b.date} | {b.time}</p>
        </div>
      )) : <p>No bookings yet.</p>}
    </main>
  );
}
