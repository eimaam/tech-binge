import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export const AdminNav = () => {
  const { logOut } = useAuth()

  return (
    <div className='admin--nav'>
        <h2>Admin Dashboard</h2>
        <ul>
            <li><Link to="/dashboard">Check Site Stats</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="">Check Posts</Link></li>
            <li><Link to="">Review Comments</Link></li>
            <li><Link to="">Check Gallery</Link></li>
        </ul>
        <div>
            <button className='btn--secondary' onClick={logOut}>Log out</button>
        </div>
    </div>
  )
}
