import React from 'react'

export const ResetPass = (props) => {
  return (
    <div className='modal'>
        <form action="">
            <input 
            type="email" 
            placeholder='Enter registered Email'
            />
            <input type="submit" />
        </form>
        <button className='btn--small' onClick={props.onClick}>close</button>
    </div>
  )
}
