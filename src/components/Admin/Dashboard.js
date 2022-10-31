import React from 'react'
import { AdminNav } from './AdminNav'
import { StatCard } from './StatCard'

export const Dashboard = () => {
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
  const cards = data.map((item, index) => {
    return <StatCard key={index} value={item.value} title={item.title}/>
  })
  return (
    <div>
        <AdminNav />
        <div className='dashboard--container'>
          {cards}
        </div>
    </div>
  )
}
