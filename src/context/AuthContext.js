import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, doc, getDocs, setDoc, Timestamp } from 'firebase/firestore';
import { auth, database, storage } from '../firebaseConfig';
import { setUserId } from 'firebase/analytics';
import { toast } from 'react-toastify';



const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }){
    const navigate = useNavigate();
    
    const [user, setUser] = useState(null)

    // const storageRef = ref(storage, `/images/${image.name}`)
    const postRef = collection(database, "posts");
  

    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [allPost, setAllPost] = useState([])

    const fetchAllPost = async () => {
      let posts = await getDocs(doc(postRef))
    }

    
    const logOut = async () => {
      setLoading(true)
      setUser(null)
      try{
        signOut(auth)
        .then(() => {
          localStorage.clear()
          toast.info('Logged out!')
        })
      }
      catch(error){
        console.log(error)
      }
      if(!user){
        navigate('/admin')
      }

    }


    const value = {
      loading, 
      setLoading,
      error,
      setError,
      navigate,
      logOut,


    }

  return (
    
    <AuthContext.Provider value={value}>
        { children }
    </AuthContext.Provider>
  )
}
