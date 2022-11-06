import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { auth } from '../../../firebaseConfig'
import { AdminNav } from '../AdminNav'
import { StatCard } from './StatCard'

export const Dashboard = () => {
  const { navigate } = useAuth()
  useEffect(() => {
    onAuthStateChanged(auth, data => {
      if(!data){
        navigate('/admin')
      }
    })
  })
  const data = [
    {
      total: "100+",
      title: "Total Posts",
    },
    {
      total: "10",
      title: "Daily Page Views",
    },
  ]
  const statCards = data.map((item, index) => {
    return <StatCard key={index} value={item.value} title={item.title}/>
  })
  
  return (
    <div>
        <AdminNav />
        <div className='dashboard--container'>
          <div className='container--item'>
            {statCards}
          </div>
        </div>
    </div>
  )
}
