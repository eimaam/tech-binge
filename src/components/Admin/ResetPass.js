import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../firebaseConfig'

export const ResetPass = (props) => {
  // reset Password
  const [resetEmail, setResetEmail] = useState({
    email: ""
  })
  // handle email for password entry
  const handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setResetEmail(prevData => ({
      ...prevData,
      [name]:value
    })
    )
  }
  
  const resetPass = async (e) => {
    e.preventDefault()
    try{
      await sendPasswordResetEmail(auth, resetEmail.email)
      .then(() => {
        // setMessage('Password reset link sent! Check your Inbox or SPAM Folder')
        toast.info('Password reset link sent! Check your Inbox or SPAM Folder')
      })
    }
    catch(error){
      if(error.code === "auth/invalid-email"){
        toast.error('Invalid or Incorrect email')
        // setError('Invalid or Incorrect email')
      }else if(error.code === 'auth/user-not-found'){
          toast.error('User not found!')
          // setError('User not found!')
      }else{
          console.log(error.code)
      }
    }
  }
  return (
    <div className='modal'>
        <form action="" onSubmit={resetPass}>
            <input 
            type="email" 
            name='email'
            placeholder='Enter registered Email'
            value={resetEmail.email}
            onChange={handleChange}
            />
            <input type="submit" value="Reset"/>
        </form>
        <button className='btn--small' onClick={props.onClick}>close</button>
    </div>
  )
}
