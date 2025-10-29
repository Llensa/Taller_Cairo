import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import logo from '../assets/logo.svg'

function Item({ to, children, requireRole, icon }) {
  const { user } = useAuth()
  if (requireRole && user?.role !== requireRole) return null
  return (
    <NavLink to={to} className={({isActive}) => 'navitem ' + (isActive ? 'active' : '')}>
      <span aria-hidden>•</span>
      <span>{children}</span>
    </NavLink>
  )
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand"><img src={logo} alt="Cairo"/><span>Cairo</span></div>

      <div className="navgroup">
        <div className="navlabel">Principal</div>
        <Item to="/">Panel</Item>
        <Item to="/clientes">Clientes</Item>
        <Item to="/vehiculos">Vehículos</Item>
        <Item to="/servicios">Servicios</Item>
        <Item to="/citas">Citas <span className="badge">Beta</span></Item>
        <Item to="/cotizaciones">Cotizaciones</Item>
        <Item to="/recordatorios">Recordatorios <span className="badge">Nuevo</span></Item>
      </div>

      <div className="navgroup">
        <div className="navlabel">Operación</div>
        <Item to="/productos">Venta de Productos</Item>
        <Item to="/inventario">Inventario</Item>
        <Item to="/pintureria">Pinturería</Item>
      </div>

      <div className="navgroup">
        <div className="navlabel">Cuenta</div>
        <Item to="/admin" requireRole="admin">Administración</Item>
        <Item to="/cuenta">Mi Cuenta</Item>
      </div>
    </aside>
  )
}
