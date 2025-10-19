// pages/api/login.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' })
  }

  // Next.js API routes parse JSON body for you when content-type is application/json
  const body = req.body || {}
  const email = typeof body.email === 'string' ? body.email : ''
  const password = typeof body.password === 'string' ? body.password : ''

  if (email === 'student@wsu.edu' && password === 'password123') {
    // Optionally set a simple cookie (not secure, just mock)
    // res.setHeader('Set-Cookie', 'token=mock-token; Path=/; HttpOnly; SameSite=Lax')
    return res.status(200).json({ ok: true })
  }

  return res.status(401).json({ ok: false, message: 'Invalid credentials' })
}
