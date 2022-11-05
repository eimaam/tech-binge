import React from 'react'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { BlogCard } from './BlogCard'
import { PuffLoader } from "react-spinners"

export const LatestStories = () => {

    const { allPosts } = useAuth()
  return (
    <div className='category--card'>
      {allPosts.length === 0 ? <PuffLoader /> 
      :
      <>
      <h2 className="title">Latest Stories:</h2>
      <main>
        <BlogCard 
            id={allPosts[4].id} 
            image={allPosts[4].imageURL}
            title={allPosts[4].title}
            author={allPosts[4].author}
            publishedDate={allPosts[4].publishDate}
            content={allPosts[4].content}
        />
      </main>
      <div className='posts'>
        {allPosts.slice(5, 8).map((item, index) => (
          <BlogCard
            key={index} 
            id={item.id} 
            image={item.imageURL}
            title={item.title}
            author={item.author}
            publishedDate={item.publishDate}
            content={item.content}
          />
        ))}
      </div>
      <br />
      <button>Check out more Stories <FaLongArrowAltRight /></button>
      </>
    }
    </div>
  )
}
