import React from 'react'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import { BlogCard } from './BlogCard'

export const CategoryCard = () => {
  return (
    <div className='category--card'>
      <h2 className="title">Latest News:</h2>
      <main>
        <BlogCard />
      </main>
      <div className='posts'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <br />
      <button>Check Out More from Category <FaLongArrowAltRight /></button>
    </div>
  )
}
