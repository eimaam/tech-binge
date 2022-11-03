import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useAuth } from '../context/AuthContext'
import { auth, database, googleProvider } from '../firebaseConfig'

export const Signup = () => {
    // useEffect(() => {
    //     onAuthStateChanged(auth, data => {
    //         data && navigate('/post')
    //     })
    // }, [])
    const {loading, setLoading, error, setError, navigate} = useAuth();

    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        photo: ""
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

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
          await createUserWithEmailAndPassword(auth, user.email, user.password)
          .then(res => {
            toast.success('Signed Up successfully!')
            navigate('./create')
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

    //   login with gmail
    const loginWithGmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            await signInWithPopup(auth, googleProvider)
            .then(response => {
                setUser({
                    email: response.email,
                    photo: response.photoURL
                })
                return navigate('./')
            })
        }
        catch(err){
            if(err.code === 'auth/popup-blocked'){
                toast.error('Pop-up blocked by browser!')
            }else if(err.code === 'auth/internal-error'){
                toast.error('Internal error... Check your internet connection & retry!')
            }
            else{
                toast.error(err.code)
            }
        }
    }

    console.log(user)

  return (
    <div className='container'>
        <div className='container--item' >
            <form action="" onSubmit={signup}>
                <div>
                    <h2>Welcome, </h2>
                    <p>Enter Details to register</p>
                </div>
                <br />
                <input 
                type="text" 
                name="username"
                value={user.username}
                placeholder="Username"
                onChange={handleChange}
                />

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
                value="sign up"                
                />
                <p>or</p>
            <button type='button' onClick={loginWithGmail}>Sign up with <FaGoogle /></button>
            </form>
        </div>
    </div>
  )
}
