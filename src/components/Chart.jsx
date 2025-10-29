import React from 'react'

// Simple SVG bar chart (no deps) for visual demo
export default function Chart({ data = [], height = 200 }) {
  const max = Math.max(1, ...data.map(d => d.value))
  const barW = 100 / data.length

  return (
    <div className="card">
      <h2>Servicios y ventas</h2>
      <svg viewBox={`0 0 100 ${height}`} style={{width:'100%', height}}>
        {data.map((d, i) => {
          const h = (d.value / max) * (height - 20)
          const x = i * barW + 3
          const y = height - h - 10
          return (
            <g key={i}>
              <rect x={x} y={y} width={barW - 6} height={h} rx="2" fill="currentColor" opacity="0.8" />
              <text x={x + (barW - 6)/2} y={height - 2} fontSize="4" textAnchor="middle" fill="var(--muted)">{d.label}</text>
            </g>
          )
        })}
        <line x1="0" y1={height-10} x2="100" y2={height-10} stroke="var(--ring)" strokeWidth="0.5"/>
      </svg>
    </div>
  )
}
