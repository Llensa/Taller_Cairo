import React from 'react'
import Table from '../components/Table'

export default function Clients() {
  const rows = [
    ['Juan Pérez','261-555-0000','jperez@email.com'],
    ['Ana Gómez','261-555-1111','agomez@email.com'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Clientes</h1>
        <div className="toolbar">
          <input className="input" placeholder="Buscar cliente..." />
          <button className="btn">Nuevo</button>
        </div>
        <Table columns={['Nombre','Teléfono','Email']} rows={rows} />
      </div>
    </div>
  )
}
