import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'
import { auth, database, googleProvider } from '../../firebaseConfig'

export const Signup = () => {
    
    const {loading, postsRef, userRef, setLoading, error, setError, navigate, setUser, user} = useAuth();

    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({
        displayName: "",
        email: "",
        password: "",
        photoURL: ""
    })

    // handle form changes
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
        console.log(data)
    }

    const signup = async (e) => {
        e.preventDefault()
        setLoading(false)
        try{
          await createUserWithEmailAndPassword(auth, data.email, data.password)
          .then(res => {
            setUser({
              email: data.email,
              displayName: data.displayName,
            })
            setDoc(doc(userRef, data.email), {
              email: data.email,
              displayName: data.displayName,
              photo: data.photoURL,
            })
            toast.success('Signed Up successfully!')
            return navigate('./addname')
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
              }else if(err.code === 'auth/email-already-in-use'){
                toast.error('Email already in use!')
                setError('Email already in use')
              }else if(err.code === 'auth/user-not-found'){
                toast.error('User not found!')
                setError('User not found!')
              }else if(err.code === 'auth/network-request-failed'){
                setError('Sorry...! Something went wrong. Check your internet connection')
              }
              else{
                setLoading(false)
                console.log(err.message)
              }
          }
        }

    //   login with gmail
    const loginWithGmail = async (e) => {
        e.preventDefault()
        try{
            await signInWithPopup(auth, googleProvider)
            .then(response => {
                setUser({
                    email: response.email,
                    photo: response.photoURL,
                    displayName: response.displayName
                })
              })
            return navigate('./dashboard')
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
                name="displayName"
                value={data.displayName}
                placeholder="Name of Author/Writer"
                onChange={handleChange}
                />

                <input 
                type="email" 
                name="email"
                value={data.email}
                placeholder="Email Address"
                onChange={handleChange}
                />

                <input 
                type="password" 
                name="password"
                placeholder="Password"
                value={data.password}
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
