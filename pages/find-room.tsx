import { useRouter } from 'next/router';

export default function FindRoom() {
  const router = useRouter();
  const rooms = [
    { id: 1, name: 'Study Room 1104', building: 'Undergraduate Library', capacity: 4, time: '10am-12pm' },
    { id: 2, name: 'Study Room 1105', building: 'Undergraduate Library', capacity: 6, time: '12:30pm-2:30pm' }
  ];

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Find Room</h1>
      {rooms.map(r => (
        <div key={r.id} className="border rounded p-4">
          <h2 className="font-semibold">{r.name}</h2>
          <p>{r.building} | {r.time} | Capacity: {r.capacity}</p>
          <button onClick={() => router.push(`/confirm-booking/${r.id}`)} className="mt-2 bg-blue-600 text-white py-1 px-3 rounded">Reserve</button>
        </div>
      ))}
    </main>
  );
}
