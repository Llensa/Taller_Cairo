import React from 'react'
import Table from '../components/Table'

export default function Services() {
  const rows = [
    ['ABC123','Cambio de aceite','02-10','04-10','Finalizado'],
    ['XYZ987','Frenos','03-11','06-11','En proceso'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Servicios</h1>
        <div className="toolbar">
          <select className="input">
            <option>Todos</option>
            <option>Pendiente</option>
            <option>En proceso</option>
            <option>Finalizado</option>
          </select>
          <button className="btn">Nuevo Servicio</button>
        </div>
        <Table columns={['Patente','Descripción','Inicio','Límite','Estado']} rows={rows} />
      </div>
    </div>
  )
}
