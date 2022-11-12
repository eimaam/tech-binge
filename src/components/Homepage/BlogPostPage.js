import React from 'react'
import {BlogCard} from './BlogCard'

import dummy from "../../assets/dummy1.jpg"
import { NavBar } from '../NavBar'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare,  FaWhatsappSquare } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { PuffLoader } from "react-spinners"
import { collection, getDoc, onSnapshot, query, where } from 'firebase/firestore'
import { database } from '../../firebaseConfig'
import { useData } from '../../context/DataContext'

export const BlogPostPage = (props) => {
  const { loading, setLoading, fetchPost } = useData()

  let { title } = useParams()

  const url = encodeURI(title)

  // state to save fetched blogContent from url
  const [blogContent, setBlogContent] = useState([])
  const [moreCategory, setMoreCategory] = useState([])

  useEffect(() => {
    setLoading(true)
    fetchPost("id", url, setBlogContent)
    if(blogContent.length !== 0){
      document.title = blogContent[0].title
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [loading])
  
  useEffect(() => {
    blogContent.length !== 0 &&
    fetchPost("category", blogContent[0].category, setMoreCategory)
  }, [])

  console.log(moreCategory)
  
  if(blogContent.length == 0){
    return <div className='flex-col'>
        <i>Loading Article...</i>
        <p><PuffLoader /></p>
            </div> 
  }
  
  return (
    <div className='container' id='blogPost'>
      <NavBar />
        <div className='container--item'>
        <div className='title'>
          {/* category */}
          <h3>{blogContent[0].category }</h3>
          <p>Published: {blogContent[0].publishDate}</p>
          <h3>By {blogContent[0].author}</h3>
          <h2>
            {blogContent.length !== 0 
            && blogContent[0].title}
          </h2>
        </div>
        <div className='share--buttons'>
          <h3><a href={`https://twitter.com/intent/tweet?text=${url}`} target="_blank"><FaTwitterSquare /></a></h3>
          <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
          <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
          <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
        </div>
        {/* image */}
        <img src={blogContent[0].imageURL} alt="dummy" className='post--image'/> 
        <i style={{textAlign: "center", margin: "auto"}}>{blogContent[0].caption}</i>
        
        {/* setting dangerouslySetInnerHTML to recognize 
        html tags from Jodit Editor used for updating  */}
        <p dangerouslySetInnerHTML={{__html: blogContent.length !== 0 ? blogContent[0].content : ""} } />

        <div className='flex'>
            <p>Share Article:</p>
            <h3><a href="/" target="_blank"><FaTwitterSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
          </div>
        <div className='more'>
          <h3>More Stories from <span>{blogContent[0].category}</span></h3>
          <div className='posts'>
            {
              moreCategory.slice(0,4).map((item, index) => {
                return <BlogCard
                        key={index} 
                        title={item.title}
                        image={item.imageURL}
                        />
              })
            
          }
          </div>
        </div>
        <div className='comment--box'>
          facebook comment plug in
        </div>
      </div>
    </div>
  )
}
