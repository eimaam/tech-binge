import React from 'react'
import { Link, useParams } from 'react-router-dom'

import dummy from "../../assets/dummy1.jpg"

export const BlogCard = ({category, title, author, publishedDate, content}) => {
  const data = {
    title: title, 
    author: author, 
    date: publishedDate, 
    content: content 
  }
  return (
    <div className='blog--card'>
      <img src={dummy} alt="dummy" />
      <Link to={`/post/${title}`} state = {data}>
        <div>
            <h3>Funding</h3>
            <h2>{title}</h2>
            <p>- {author} | <small>{publishedDate}</small> </p>
        </div>
      </Link>
    </div>
  )
}
