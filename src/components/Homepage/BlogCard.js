import React from 'react'
import { Link, useParams } from 'react-router-dom'

import dummy from "../../assets/dummy1.jpg"

export const BlogCard = ({category, title, author, publishedDate, content, id, image}) => {
  // change the url to string to allow passing as plain non-encoded string
  const url = decodeURI(id)

  return (
    <div className='blog--card'>
      <img src={image} alt="" />
      <Link to={`/${url}`}>
        <div>
            {category ? <h3>{category}</h3> : null}
            <h2>{title}</h2>
            <p>{author ? `- ${author}` : null} <small>{publishedDate ? `| ${publishedDate}` : ""}</small> </p>
        </div>
      </Link>
    </div>
  )
}

