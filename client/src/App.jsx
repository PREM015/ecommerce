/// ===============================
/// ✅ 1. client/src/App.jsx
/// ===============================

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
        {!user && <Link to="/login">🔑 Login</Link>}
        {!user && <Link to="/register">📝 Register</Link>}
        {user && <Link to="/dashboard">📊 Dashboard</Link>}
        {user && <button onClick={handleLogout}>🚪 Logout</button>}
      </nav>

      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App