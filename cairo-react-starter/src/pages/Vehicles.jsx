import React from 'react'
import Table from '../components/Table'

export default function Vehicles() {
  const rows = [
    ['ABC123', 'Pérez', 'Toyota', 'Corolla', '2018', 'En diagnóstico'],
    ['XYZ987', 'Gómez', 'VW', 'Gol', '2014', 'En proceso'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Vehículos</h1>
        <div className="toolbar">
          <input className="input" placeholder="Patente / Cliente..." />
          <button className="btn">Registrar entrada</button>
        </div>
        <Table columns={['Patente','Cliente','Marca','Modelo','Año','Estado']} rows={rows} />
      </div>
    </div>
  )
}
