import React from 'react'
import { BlogCard } from './BlogCard'

export const Section = () => {
  return (
    <section>
        <h2 className='title'>Featured: </h2>
        <div className='section--contents'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </section>
  )
}
