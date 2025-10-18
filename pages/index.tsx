import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Study Room Reservation (Minimal)</h1>
      <p>Navigate below:</p>
      <div className="flex gap-4">
        <Link href="/login" className="underline text-blue-600">Login</Link>
        <Link href="/dashboard" className="underline text-blue-600">Dashboard</Link>
        <Link href="/find-room" className="underline text-blue-600">Find Room</Link>
      </div>
    </main>
  );
}
