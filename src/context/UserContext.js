import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'

AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export default function UserContext({ children }){
    
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: "",
        photo: "",
        fullName: "",
    })

    const value = {

    }

  return (
    
    <Auth.Provider value={value}>
        { children }
    </Auth.Provider>
  )
}
