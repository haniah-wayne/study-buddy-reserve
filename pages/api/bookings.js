export default function handler(req, res) {
  const data = [
    { id: 1, roomName: "Study Room 1104", building: "Undergraduate Library", date: "Sept 16, 2025", time: "10am-12pm" }
  ];
  res.status(200).json({ bookings: data });
}
