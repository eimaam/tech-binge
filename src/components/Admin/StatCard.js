import React from 'react'
import { ImStatsBars } from "react-icons/im"
// import { blog } from "react-icons/all"

export const StatCard = (props) => {
  return (
    <div className='stat--card'>
        <h1><ImStatsBars /></h1>
        <h2>{props.value}</h2>
        <h2>{props.title}</h2>
    </div>
  )
}
