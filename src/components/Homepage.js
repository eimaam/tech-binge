import React from 'react'
import { FaAlignRight, FaAngleRight, FaArrowAltCircleDown, FaChevronRight, FaCode, FaLongArrowAltRight, FaPeopleArrows, FaRegKissWinkHeart } from 'react-icons/fa'
import { BlogCard } from './BlogCard'

export const Homepage = () => {
  return (
    <div className='container' id='homepage'>
        <div className='container--item'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <div className='categories'>
              <h2>News Categories: </h2>
              <h3>Windows</h3>
              <h3>MacOS</h3>
              <h3>Tutorials: Videos</h3>
              <h3>#Shortz</h3>
              <h3>Funding</h3>
              <h3>Cryptocurrency</h3>
              <h3>Business</h3>
              <h3>Economy</h3>
              <h3>Nigeria</h3>
              <h3>US</h3>
              <h3>Startup</h3>
            </div>
            <div className='dev'>
              <div>
                <h2>Categories</h2>
              </div>
                <h3><FaCode />  Frontend Development</h3>
                <h3><FaCode />  Backend Development</h3>
                <h3><FaLongArrowAltRight />  Watch Videos</h3>
            </div>
            <div>
              <h2><small><FaChevronRight /></small> Watch Videos</h2>
            </div>
        </div>
    </div>
  )
}
