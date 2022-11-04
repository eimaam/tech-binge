import { browserLocalPersistence, onAuthStateChanged, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'
import { auth, database } from '../../firebaseConfig'
import { ResetPass } from './ResetPass'

export const Login = () => {
    useEffect(() => {
        onAuthStateChanged(auth, data => {
            data && navigate('/dashboard')
        })
    }, [])
    const {loading, setLoading, error, setError, navigate} = useAuth();

    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // handle form changes
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        
        setUser(prevData => ({
            ...prevData,
            [name]: value
        }))
        console.log(user)
    }

    const login = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
          setPersistence(auth, browserLocalPersistence)
          await signInWithEmailAndPassword(auth, user.email, user.password)
          .then(res => {
            toast.success('Welcome...')
            navigate('/addusername')
          })
        }
        catch(err){
            if(err.code === 'auth/wrong-password'){
                toast.error('Wrong Password')
                setError('Wrong Password')
              }else if(err.code === 'auth/too-many-requests'){
                toast.error('Too many trials! You will have to reset your password to access this site!')
                setError('Too many trials! You will have to reset your password to access this site!')
              }else if(err.code === 'auth/user-not-found'){
                toast.error('User not found!')
                setError('User not found!')
              }else if(err.code === 'auth/network-request-failed'){
                setError('Sorry...! Something went wrong. Check your internet connection')
              }
              else{
                console.log(err.message)
                toast.error('Retry...')
            }
        }
        setLoading(false)
      }

      

  return (
    <div className='container'>
        <div className='container--item' >
            <form action="" onSubmit={login}>
                <div>
                    <h2>Admin Page</h2>
                    <p>Enter your details to login</p>
                </div>
                <br />
                <input 
                type="email" 
                name="email"
                value={user.email}
                placeholder="Email Address"
                onChange={handleChange}
                />
                <input 
                type="password" 
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                />
                <input 
                type="submit" 
                value="login"                
                />
                <div>
                    <p className='flex'>Forgot Password? <button type='button' className='btn--small' onClick={() => setShowModal(!showModal)}>RESET</button> </p>
                </div>
            </form>
            {showModal && <ResetPass onClick={() => setShowModal(false)}/>}
        </div>
    </div>
  )
}
