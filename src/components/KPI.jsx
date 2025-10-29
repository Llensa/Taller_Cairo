import React from 'react'

export default function KPI({ label, value }) {
  return (
    <div className="card kpi">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  )
}
