import React from 'react'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { BlogCard } from './BlogCard'
import { PuffLoader } from "react-spinners"

export const CategoryCard = ({
  sectionTitle,
  posts,
  start,
  end,
  btnValue,
  }
  ) => {

    const { allPosts } = useAuth()
  return (
    <div className='category--card'>
      {allPosts.length === 0 
      ? <div className='loader'>
          <PuffLoader /> 
        </div>
      :
      <>
      <h2 className="title">{sectionTitle}</h2>
      <main>
        <BlogCard 
            id={posts[start].id} 
            image={posts[start].imageURL}
            title={posts[start].title}
            author={posts[start].author}
            content={posts[start].content}
        />
      </main>
      <div className='posts'>
        {posts.slice(start+1, end).map((item, index) => (
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
      <button>{btnValue ? btnValue : `Check out more from ${sectionTitle}`}<FaLongArrowAltRight /></button>
      </>
    }
    </div>
  )
}
