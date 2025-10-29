import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Account() {
  const { user } = useAuth()
  return (
    <div className="grid">
      <div className="card">
        <h1>Mi Cuenta</h1>
        <p>Usuario: <strong>{user?.username}</strong></p>
        <p>Rol: <strong>{user?.role}</strong></p>
      </div>
    </div>
  )
}
