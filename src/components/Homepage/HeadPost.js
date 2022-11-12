import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { BlogCard } from './BlogCard'
import { PuffLoader } from "react-spinners"

export const HeadPost = () => {
  
  const { allPosts } = useAuth()
  
  return (
    <div className='head--posts'>
      {allPosts.length === 0 
      ? <div className='loader'>
          <h1><PuffLoader /> </h1>
        </div>
      :
      <>
      <div className='main'>
          <BlogCard
            id={allPosts[0].id} 
            image={allPosts[0].imageURL}
            title={allPosts[0].title}
            author={allPosts[0].author}
            publishedDate={allPosts[0].publishDate}
            content={allPosts[0].content}
            category={allPosts[0].category}
          />
      </div>
      <aside>
        {allPosts.slice(1,4).map((item, index) => {
          return (
            <BlogCard
              key={index}
              id={item.id} 
              image={item.imageURL}
              title={item.title}
              author={item.author}
              publishedDate={item.publishDate}
              content={item.content}
              category={item.category}
            />
          )
        })}
      </aside>
      </>
      }
    </div>
  )
}
