import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { BlogCard } from './BlogCard'
import { PuffLoader } from "react-spinners"

export const Section = () => {
  const { allPosts } = useAuth()
  return (
    <section>
      {allPosts.length === 0 
      ? <h1 className='loader'><PuffLoader /></h1> 
      :
      <>
      <h2 className='title'>Featured: </h2>
      <div className='section--contents'>
          {allPosts.map((item, index) => (
            <BlogCard
            key={index} 
            id={item.id} 
            image={item.imageURL}
            title={item.title}
            content={item.content}
          />
          ))}
      </div>
      </>
    }
    </section>
  )
}
