import React from 'react'
import Table from '../components/Table'

export default function PaintShop() {
  const rows = [
    ['ABC123','Paragolpes y guardabarros','Taller Norte','En proceso','12-12'],
    ['XYZ987','Techo y puerta','Pinturería Centro','Listo','10-11'],
  ]
  return (
    <div className="grid" style={{gap:'1rem'}}>
      <div className="card">
        <h1>Pinturería</h1>
        <div className="toolbar">
          <select className="input">
            <option>Todos los estados</option>
            <option>Pendiente</option>
            <option>En proceso</option>
            <option>Listo</option>
          </select>
          <button className="btn">Nueva orden de pintura</button>
        </div>
        <Table columns={['Patente','Trabajo','Destino','Estado','Entrega']} rows={rows} />
      </div>

      <div className="card">
        <h2>¿Por qué web y no escritorio?</h2>
        <p>
          El taller y la pinturería trabajan en <strong>distintas ubicaciones</strong>. Con una app web, cualquier sede
          puede registrar avances, fotos y entregas en tiempo real desde la PC o el celular, sin instalaciones ni VPN.
        </p>
        <ul>
          <li>Acceso desde cualquier lugar (PC o móvil)</li>
          <li>Colaboración entre sedes y proveedores</li>
          <li>Escalable para futuras expansiones del taller</li>
        </ul>
      </div>
    </div>
  )
}
