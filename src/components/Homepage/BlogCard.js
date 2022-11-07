import React from 'react'
import { Link, useParams } from 'react-router-dom'

import dummy from "../../assets/dummy1.jpg"

export const BlogCard = ({category, title, author, publishedDate, content, id, image}) => {
  const url = decodeURI(id)

  console.log(url)
  return (
    <div className='blog--card'>
      <img src={image} alt="" />
      <Link to={`/${url}`}>
        <div>
            <h3>{category}</h3>
            <h2>{title}</h2>
            <p>{author ? `- ${author}` : ""} <small>{publishedDate ? `| ${publishedDate}` : ""}</small> </p>
        </div>
      </Link>
    </div>
  )
}
