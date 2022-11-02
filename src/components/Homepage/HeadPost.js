import React from 'react'
import { BlogCard } from './BlogCard'

export const HeadPost = () => {
  return (
    <div className='head--posts'>
      <div className='main'>
            <BlogCard />
      </div>
      <aside>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </aside>
    </div>
  )
}
