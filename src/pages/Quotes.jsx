import React from 'react'
import Table from '../components/Table'

export default function Quotes() {
  const rows = [
    ['#0012','ABC123','06-11','$ 85.000','Enviada'],
    ['#0013','XYZ987','07-11','$ 42.500','Aprobada'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Cotizaciones</h1>
        <div className="toolbar">
          <button className="btn">Nueva cotización</button>
        </div>
        <Table columns={['Folio','Patente','Fecha','Total','Estado']} rows={rows} />
      </div>
    </div>
  )
}
