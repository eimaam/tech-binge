import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, doc, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore';
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
    
    const [user, setUser] = useState({})
    const [isLogged, setIsLogged] = useState(false)

    // const storageRef = ref(storage, `/images/${image.name}`)
    const postRef = collection(database, "posts");
    const userRef = collection(database, "usersDetails");
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
      fetchAllPost()
      getUserData()
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

  // get all data linked to Logged in user once he logs in
  const getUserData = async () => {
    setLoading(true)
    onAuthStateChanged(auth, async data => {
      if(data){
        setIsLogged(true)
        try{
          const document = await getDoc(doc(userRef, data.email))
          if(!document.exists()){
            await setDoc(doc(userRef, data.email), {
              email: data.email,
              name: data.displayName,
              photo: data.photoURL
            })
          }
          setUser({
            email: data.email,
            name: data.displayName,
            photo: data.photoURL
          })
        }
        catch(err){
          console.log(err.message)
        }
      }
      setLoading(false)
    })
  }

    
    const logOut = async () => {
      setIsLogged(false)
      setLoading(true)
      setUser(null)
      try{
        signOut(auth)
        .then(() => {
          localStorage.clear()
          toast.info('Logged out!')
        })
        setLoading(false)
        navigate('/admin')
      }
      catch(error){
        console.log(error)
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
      getUserData,
      allPosts,
      setAllPosts,
      userRef,
      postRef,
      user,
      setUser,
      isLogged,
      setIsLogged
    }

  return (
    
    <AuthContext.Provider value={value}>
        { children }
    </AuthContext.Provider>
  )
}
