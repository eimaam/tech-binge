import React from 'react'
import { useState } from 'react'
import { ResetPass } from './ResetPass'

export const Login = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='container'>
        <div className='container--item' >
            <form action="" >
                <div>
                    <h2>Admin Page</h2>
                    <p>Enter your details to login</p>
                </div>
                <br />
                <input 
                type="email" 
                // value={}
                placeholder="Email Address"
                // onChange={}
                />
                <input 
                type="password" 
                // value={}
                placeholder="Password"
                // onChange={}
                />
                <input 
                type="submit" 
                name="" 
                />
                <div>
                    <p className='flex'>Forgot Password? <button className='btn--small' onClick={() => setShowModal(!showModal)}>RESET</button> </p>
                </div>
            </form>
            {showModal && <ResetPass onClick={() => setShowModal(false)}/>}
        </div>
    </div>
  )
}
