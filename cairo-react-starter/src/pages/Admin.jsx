import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Admin() {
  const { user } = useAuth()
  if (user?.role !== 'admin') {
    return <div className="card"><h1>Acceso restringido</h1><p>Esta sección es solo para administradores.</p></div>
  }
  return (
    <div className="grid">
      <div className="card">
        <h1>Administración</h1>
        <ul>
          <li>Gestión de usuarios y roles</li>
          <li>Parámetros del taller (impuestos, mano de obra, etc.)</li>
          <li>Respaldos y auditoría</li>
        </ul>
      </div>
    </div>
  )
}
