import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { auth } from '../firebaseConfig'

export const PrivateRoutes = () => {
    const { navigate } = useAuth()
  return (
    auth.currentUser ? <Outlet /> : navigate('admin')
  )
}
