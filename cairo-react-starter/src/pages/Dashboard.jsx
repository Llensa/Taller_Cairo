import React from 'react'
import KPI from '../components/KPI'
import Chart from '../components/Chart'

export default function Dashboard() {
  const data = [
    { label: '02-10', value: 2 },
    { label: '04-10', value: 3 },
    { label: '31-10', value: 5 },
    { label: '03-11', value: 1 },
    { label: '06-11', value: 1 },
    { label: '12-12', value: 2 },
  ]
  return (
    <div className="grid" style={{gap:'1rem'}}>
      <div className="grid grid-4">
        <KPI label="Clientes" value="32" />
        <KPI label="Órdenes de Servicio" value="185" />
        <KPI label="Utilidad Total" value="$ -14.362" />
        <KPI label="Vehículos en Piso" value="24" />
      </div>
      <Chart data={data} />
    </div>
  )
}
