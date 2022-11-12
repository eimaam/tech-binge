import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth, database } from '../firebaseConfig'
import { useAuth } from './AuthContext'
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore'


const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    const [userInfo, setUserInfo] = useState({})
    
    // function to fetch all details linked to logged in user
    const fetchUserDetail = () => {
        try{
            const data = getDoc(doc(database, "usersDetails", user.email))
            .then(res => {
                setUserInfo(res.data())
            })
        }
        catch(err){
            console.log(err)
        }
    }

    // function to fetch post from database using url as id Posts
  const fetchPost = async (category, whereVal, savingState) => {
    try{
      const q = query(collection(database, "posts"), where(`${category}`, "==", `${whereVal}`))
      await onSnapshot(q, snapShot => {
        savingState(snapShot.docs.map(data => ({
          ...data.data(),
          id: data.id
        })))
      })
      setLoading(false)
    }
    catch(error){
      console.log(error)
    }
  };
    
    useEffect(() => {
      fetchUserDetail()
    }, [user, loading])


    const value = {
        userInfo,
        fetchUserDetail,
        setUserInfo,
        fetchPost,
        loading,
        setLoading
    }

  return (
    <DataContext.Provider value={value}>
        { children }
    </DataContext.Provider>
  )
}
