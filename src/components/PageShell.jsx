import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function PageShell() {
  return (
    <div className="app">
      <Sidebar />
      <Topbar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
