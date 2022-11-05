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
import { useEffect } from 'react';



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

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
      fetchAllPost()
    }, [])

    const fetchAllPost = async () => {
      setLoading(true)
      await getDocs(collection(database, "posts"))
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data()
        }));
        setAllPosts(data)
      })
      setLoading(false) 
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
      fetchAllPost,
      allPosts,
      setAllPosts,


    }

  return (
    
    <AuthContext.Provider value={value}>
        { children }
    </AuthContext.Provider>
  )
}