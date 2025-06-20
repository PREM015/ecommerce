  /// ===============================
  /// ✅ 3. client/src/pages/Register.jsx
  /// ===============================

  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import axios from 'axios'

  function Register({ setUser }) {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, formData)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setUser(res.data.user)
        navigate('/dashboard')
      } catch (err) {
        setMsg(err.response?.data?.msg || 'Registration failed')
      }
    }

    return (
      <div>
        <h2>📝 Register</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} required /><br />
          <input name="email" placeholder="Email" onChange={handleChange} required /><br />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
          <button type="submit">Register</button>
        </form>
        {msg && <p style={{ color: 'red' }}>{msg}</p>}
      </div>
    )
  }

  export default Register