import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { auth } from '../firebaseConfig'

export const ProtectedRoutes = () => {
    const { navigate, user } = useAuth()
  return (
    user ? <Outlet /> : navigate('admin')
  )
}
