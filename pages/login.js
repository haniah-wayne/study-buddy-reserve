export default function handler(req, res) {
  const { email, password } = req.body;
  if (email === "student@wsu.edu" && password === "password123")
    res.status(200).json({ ok: true });
  else
    res.status(401).json({ ok: false, message: "Invalid credentials" });
}
