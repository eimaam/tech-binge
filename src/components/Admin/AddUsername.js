import React from 'react'
import { useEffect } from 'react'

export const AddUsername = () => {
    
    
  return (
    <div className='container'>
        <div className='container--item'>
            <form action="">
                <p>Enter prefered username:</p>
                <input 
                type="text" 
                placeholder='Username'
                />
                <input type="submit"  value="Add Username" />
            </form>

        </div>

    </div>
  )
}
