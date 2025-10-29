import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Topbar() {
  const nav = useNavigate()
  const { user, logout } = useAuth()

  const toggleTheme = () => {
    const el = document.documentElement
    el.classList.toggle('light')
    localStorage.setItem('theme', el.classList.contains('light') ? 'light' : 'dark')
  }

  return (
    <header className="topbar">
      <div style={{display:'flex', gap:'.5rem'}}>
        <button className="btn-ghost" onClick={() => nav('/cotizaciones')}>Nueva Cotización</button>
        <button className="btn-ghost" onClick={() => nav('/servicios')}>Nuevo Servicio</button>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'.5rem'}}>
        <span style={{color:'var(--muted)'}}>Hola, <strong>{user?.username}</strong> ({user?.role})</span>
        <button className="btn-ghost" onClick={toggleTheme}>🌓</button>
        <button className="btn" onClick={() => { logout(); nav('/login', { replace:true }) }}>Salir</button>
      </div>
    </header>
  )
}
