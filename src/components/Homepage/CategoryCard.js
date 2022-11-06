import React, { useEffect } from 'react'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { BlogCard } from './BlogCard'
import { PuffLoader } from "react-spinners"

// AOS import
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export const CategoryCard = ({
  sectionTitle,
  posts,
  start,
  end,
  btnValue,
  }
  ) => {

    useEffect(() => {
      AOS.init({delay: 600, duration: 600, easing: 'ease-out'})
    }, [])

    const { allPosts } = useAuth()
  return (
    <div className='category--card' data-aos="fade-up">
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
            // author={posts[start].author}
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
