import React from 'react'
import { Link } from 'react-router-dom'

export const AdminNav = () => {
  return (
    <div className='admin--nav'>
        <h2>Admin Dashboard</h2>
        <ul>
            <li><Link to="">Check Site Stats</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="">Check Posts</Link></li>
            <li><Link to="">Review Comments</Link></li>
            <li><Link to="">Check Gallery</Link></li>
        </ul>
        <div>
            <button className='btn--secondary'>Log out</button>
        </div>
    </div>
  )
}
