import { collection, doc, setDoc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { auth, database } from '../../firebaseConfig'
import { toast } from 'react-toastify';
import { useData } from '../../context/DataContext'
import { onAuthStateChanged } from 'firebase/auth'
import { PuffLoader } from 'react-spinners'

export const AddDisplayName = () => {

  
  const { loading, setLoading, user, navigate, userRef } = useAuth()
  const { userInfo, fetchUserDetail } = useData()

  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, data => {
      if(data && userInfo.displayName !== undefined){
        setLoading(false)
        return navigate('/dashboard')
      }else{
        setLoading(false)
      }
    })  
  }, [userInfo])

  console.log(userInfo.displayName)
  

  const [data, setData] = useState({
    name: ""
  })


  // handle input change
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    })
    )
  }

  const addData = async (e) => {
    e.preventDefault()
    await updateDoc(doc(userRef, auth.currentUser.email), {
      email: auth.currentUser.email,
      name: data.name,
    })
    toast.success('Name Added!') 
  }
    
    
  return (
    <div className='container'>
      {loading 
      ? <div className='loader'><PuffLoader /></div> 
      :
        <div className='container--item'>
            <form action="" onSubmit={addData}>
                <p>Enter prefered username:</p>
                <input
                name='name' 
                type="text" 
                placeholder='Enter Display Name'
                value={data.name}
                onChange={handleChange}
                />
                <input type="submit"  value="Add Name" />
            </form>

        </div>
        }

    </div>
  )
}
