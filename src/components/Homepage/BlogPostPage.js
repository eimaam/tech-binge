import React from 'react'
import {BlogCard} from './BlogCard'

import dummy from "../../assets/dummy1.jpg"
import { NavBar } from '../NavBar'
import { FaFacebook, FaFacebookSquare, FaLinkedin, FaShare, FaTwitterSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { useLocation, useMatch, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { PuffLoader } from "react-spinners"
import { collection, getDoc, onSnapshot, query, where } from 'firebase/firestore'
import { database } from '../../firebaseConfig'

export const BlogPostPage = (props) => {
  // const {loading, setLoading} = useAuth()
  const [loading, setLoading] = useState(false)

  let { title } = useParams()

  // state to save fetched blogContent from url
  const [blogContent, setBlogContent] = useState([])
  
  
  useEffect(() => {
    fetchPost()
  }, [])

// function to fetch header Posts
  const fetchPost = async () => {
    try{
      const q = query(collection(database, "posts"), where("id", "==", `${title}`))
      await onSnapshot(q, snapShot => {
        setBlogContent(snapShot.docs.map(data => ({
          ...data.data(),
          id: data.id
        })))
      })
    }
    catch(error){
      console.log(error)
    }
  };
console.log(blogContent)
  
  return (
    <div className='container' id='blogPost'>
      <NavBar />
      {loading 
      ? 
      <div>
        <p>Loading Article...</p>
        <p><PuffLoader /></p>
      </div> 
        : 
        <div className='container--item'>
        {blogContent.length !== 0 ? <img src={blogContent[0].imageURL} alt="dummy" className='post--image'/> : "loading image..."}
        <div className='title'>
          <h3>{blogContent.length !== 0 && `Category: ${blogContent[0].category}` }</h3>
          <p>Published: {blogContent.length !== 0 && blogContent[0].publishDate} by {blogContent.length !== 0 && blogContent[0].author}</p>
          <h2>{blogContent.length !== 0 && blogContent[0].title}</h2>
          <div className='share--buttons'>
            <h3><a href="/" target="_blank"><FaTwitterSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
          </div>
        </div>
        {/* setting dangerouslySetInnerHTML to recognize 
        html tags from Jodit Editor used for updating  */}
        <p dangerouslySetInnerHTML={{__html: blogContent.length !== 0 ? blogContent[0].content : ""} } />
        <div className='flex'>
            <p>Share this story:</p>
            <h3><a href="/" target="_blank"><FaTwitterSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
          </div>
        <div className='more'>
          <h3>More Stories from <span>{blogContent.length !== 0 && blogContent[0].category}</span></h3>
          <div className='posts'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className='comment--box'>
          facebook comment plug in
        </div>
      </div>
      }
    </div>
  )
}
