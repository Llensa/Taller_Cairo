import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import PageShell from './components/PageShell'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Vehicles from './pages/Vehicles'
import Services from './pages/Services'
import Quotes from './pages/Quotes'
import Appointments from './pages/Appointments'
import Reminders from './pages/Reminders'
import Products from './pages/Products'
import Inventory from './pages/Inventory'
import Admin from './pages/Admin'
import Account from './pages/Account'
import PaintShop from './pages/PaintShop'

function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark'
    if (theme === 'light') document.documentElement.classList.add('light')
  }, [])

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<PrivateRoute><PageShell/></PrivateRoute>}>
          <Route index element={<Dashboard/>} />
          <Route path="clientes" element={<Clients/>} />
          <Route path="vehiculos" element={<Vehicles/>} />
          <Route path="servicios" element={<Services/>} />
          <Route path="citas" element={<Appointments/>} />
          <Route path="cotizaciones" element={<Quotes/>} />
          <Route path="recordatorios" element={<Reminders/>} />
          <Route path="productos" element={<Products/>} />
          <Route path="inventario" element={<Inventory/>} />
          <Route path="admin" element={<Admin/>} />
          <Route path="cuenta" element={<Account/>} />
          <Route path="pintureria" element={<PaintShop/>} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
