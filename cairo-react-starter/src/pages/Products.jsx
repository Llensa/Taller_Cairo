import React from 'react'
import Table from '../components/Table'

export default function Products() {
  const rows = [
    ['Filtro aceite', '35', '$ 8.500'],
    ['Pastillas freno', '12', '$ 22.000'],
  ]
  return (
    <div className="grid">
      <div className="card">
        <h1>Venta de productos</h1>
        <div className="toolbar">
          <button className="btn">Nuevo producto</button>
        </div>
        <Table columns={['Producto','Stock','Precio']} rows={rows} />
      </div>
    </div>
  )
}
