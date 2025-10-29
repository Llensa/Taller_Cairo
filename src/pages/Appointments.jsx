import React from 'react'
import Table from '../components/Table'

export default function Appointments() {
  const rows = [
    ['03-11 10:00','Pérez','ABC123','Diagnóstico'],
    ['06-11 15:00','Gómez','XYZ987','Entrega'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Citas <span className="badge">Beta</span></h1>
        <div className="toolbar">
          <button className="btn">Nueva cita</button>
        </div>
        <Table columns={['Fecha/Hora','Cliente','Patente','Motivo']} rows={rows} />
      </div>
    </div>
  )
}
