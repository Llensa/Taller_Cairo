import React from 'react'
import Table from '../components/Table'

export default function Inventory() {
  const rows = [
    ['Filtro aceite', '35', 'Bajo'],
    ['Pastillas freno', '12', 'OK'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Inventario</h1>
        <div className="toolbar">
          <button className="btn">Ajustar stock</button>
        </div>
        <Table columns={['Repuesto','Cantidad','Estado']} rows={rows} />
      </div>
    </div>
  )
}
