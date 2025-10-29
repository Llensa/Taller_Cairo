import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('cairo_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (username, role) => {
    const u = { username, role } // role: 'admin' | 'mecanico'
    setUser(u)
    localStorage.setItem('cairo_user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('cairo_user')
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
