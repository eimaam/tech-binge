import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth, database } from '../firebaseConfig'
import { useAuth } from './AuthContext'

const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
    const { user, loading } = useAuth()

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
console.log(userInfo)
    
    useEffect(() => {
      fetchUserDetail()
    }, [user, loading])


    const value = {
        userInfo,
        fetchUserDetail,
        setUserInfo,
    }

  return (
    <DataContext.Provider value={value}>
        { children }
    </DataContext.Provider>
  )
}
