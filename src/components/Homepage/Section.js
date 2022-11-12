import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { BlogCard } from './BlogCard'
import { PuffLoader } from "react-spinners"

// AOS import
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useData } from '../../context/DataContext';
// ..

export const Section = () => {
  const { allPosts } = useAuth()
  const { loading, fetchPost } = useData()

  const [featuredPosts, setFeaturedPosts] = useState([])

  useEffect(() => {
    fetchPost("category", "Featured", setFeaturedPosts)
  }, [loading])

  console.log(featuredPosts)

  useEffect(() => {
    AOS.init({delay: 700, duration: 700, easing: 'ease-out'})
  }, [])

  return (
    <section data-aos="fade-up">
      {allPosts.length === 0 
      ? <h1 className='loader'><PuffLoader /></h1> 
      :
      <>
      <h2 className='title'>Featured: </h2>
      <div className='section--contents'>
          {featuredPosts.map((item, index) => (
            <BlogCard
            key={index} 
            id={item.id} 
            image={item.imageURL}
            title={item.title}
            content={item.content}
            category={item.category}
          />
          ))}
      </div>
      </>
    }
    </section>
  )
}
