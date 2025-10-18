import { useRouter } from 'next/router';

export default function ConfirmBooking() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Confirm Booking #{id}</h1>
      <p>Your booking has been confirmed for Study Room {id}!</p>
      <button onClick={() => router.push('/dashboard')} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Back to Dashboard</button>
    </main>
  );
}
