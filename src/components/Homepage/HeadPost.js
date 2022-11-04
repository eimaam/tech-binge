import React from 'react'
import { fakeData } from '../FakeData'
import { BlogCard } from './BlogCard'

export const HeadPost = () => {
  return (
    <div className='head--posts'>
      <div className='main'>
          <BlogCard 
            title={fakeData[0].title}
            author={fakeData[0].author}
            publishedDate={fakeData[0].publishDate}
            content={fakeData[0].content}
          />
      </div>
      <aside>
        {fakeData.slice(1,4).map((item, index) => {
          return (
            <BlogCard
              key={index} 
              title={item.title}
              author={item.author}
              publishedDate={item.publishDate}
              content={item.content}
            />
          )
        })}
        
      </aside>
    </div>
  )
}
