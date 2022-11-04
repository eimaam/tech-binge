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

export const BlogPostPage = (props) => {
  const {loading, setLoading} = useAuth()
  const { title } = useParams()

  const location = useLocation()
  const [pageContent, setPageContent] = useState([])

  const data = location.state
  // setPageContent(data)
  console.log(data)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[location])
  
  return (
    <div className='container' id='blogPost'>
      <NavBar />
      {loading 
      ? 
      <div>
        <p>Loading Article...</p>
        <p><PuffLoader /></p>
        </div> : 
      <div className='container--item'>
        <img src={dummy} alt="dummy" />
        <div className='title'>
          <h3>Category: Funding</h3>
          <p>{pageContent.date}</p>
          <p>Author: {pageContent.author}</p>
          <h2>{title}</h2>
          <div className='share--buttons'>
            <h3><a href="/" target="_blank"><FaTwitterSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
          </div>
        </div>
        <p>{pageContent.content}</p>
        <div className='flex'>
            <p>Share this story:</p>
            <h3><a href="/" target="_blank"><FaTwitterSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
          </div>
        <div className='more'>
          <h3>More Stories from $Category:</h3>
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
