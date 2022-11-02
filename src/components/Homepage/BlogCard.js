import React from 'react'

import dummy from "../../assets/dummy1.jpg"

export const BlogCard = () => {
  return (
    <div className='blog--card'>
        <img src={dummy} alt="dummy" />
        <div>
            <h3>Funding</h3>
            <h2>Tech Desk just closed a multi million deal with TechStars Texas</h2>
            <p>- Imam Dahir Dan-Azumi</p>
        </div>
    </div>
  )
}
