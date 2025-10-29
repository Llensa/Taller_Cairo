import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('mecanico')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handle = (e) => {
    e.preventDefault()
    if (!username.trim()) return
    login(username.trim(), role)
    navigate('/', { replace: true })
  }

  const toggleTheme = () => {
    const el = document.documentElement
    el.classList.toggle('light')
    localStorage.setItem('theme', el.classList.contains('light') ? 'light' : 'dark')
  }

  return (
    <div style={{display:'grid', placeItems:'center', height:'100%'}}>
      <form onSubmit={handle} className="card" style={{minWidth: 320}}>
        <h1>Ingresar</h1>
        <div className="grid">
          <label>Usuario</label>
          <input className="input" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Ej. Juan" />
          <label>Rol</label>
          <select className="input" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="mecanico">Mecánico</option>
            <option value="admin">Administrador</option>
          </select>
          <div style={{display:'flex', gap:'.5rem', marginTop:'.5rem'}}>
            <button className="btn" type="submit">Entrar</button>
            <button type="button" className="btn-ghost" onClick={toggleTheme}>🌓 Tema</button>
          </div>
        </div>
      </form>
    </div>
  )
}
