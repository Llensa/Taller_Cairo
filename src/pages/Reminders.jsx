import React from 'react'
import Table from '../components/Table'

export default function Reminders() {
  const rows = [
    ['Cambio de aceite','Pérez','ABC123','30 días'],
    ['Revisión frenos','Gómez','XYZ987','7 días'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Recordatorios <span className="badge">Nuevo</span></h1>
        <div className="toolbar">
          <button className="btn">Crear recordatorio</button>
        </div>
        <Table columns={['Recordatorio','Cliente','Patente','Vence en']} rows={rows} />
      </div>
    </div>
  )
}
