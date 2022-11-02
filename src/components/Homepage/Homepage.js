import React from 'react'
import { FaAlignRight, FaAngleRight, FaArrowAltCircleDown, FaBusinessTime, FaChevronRight, FaCode, FaLongArrowAltRight, FaMoneyBill, FaMoneyBillAlt, FaPeopleArrows, FaRegKissWinkHeart } from 'react-icons/fa'
import { BlogCard } from './BlogCard'
import { NavBar } from '../NavBar'
import { HeadPost } from './HeadPost'
import { CategoryCard} from './CategoryCard'
import { Section } from './Section'

export const Homepage = () => {
  return (
    <div className='container' id='homepage'>
      <NavBar />
        <div className='container--item'>
          <HeadPost />
          <hr />
          <CategoryCard />
          <hr />
          <Section />
          <hr />
          <CategoryCard />
          <hr />
          <CategoryCard />
          <hr />
          <CategoryCard />
          <hr />
          <CategoryCard />
          <hr />
          <CategoryCard />
        </div>
    </div>
  )
}

            // <aside>
            //   <div className='news--tags'>
            //     <div>
            //       <h2>News Categories: </h2>
            //     </div>
            //     <div>
            //       <h4>Windows</h4>
            //       <h4>MacOS</h4>
            //       <h4>Tutorials: Videos</h4>
            //       <h4>#Shortz</h4>
            //       <h4>Funding</h4>
            //       <h4>Cryptocurrency</h4>
            //       <h4>Business</h4>
            //       <h4>Economy</h4>
            //       <h4>Nigeria</h4>
            //       <h4>US</h4>
            //       <h4>Startup</h4>
            //     </div>
            //   </div>
            //   <div className='dev'>
            //     <div>
            //       <h2>Categories</h2>
            //     </div>
            //       <h3><FaCode />  Frontend Development</h3>
            //       <h3><FaCode />  Backend Development</h3>
            //       <h3><FaMoneyBillAlt />  Business/Economy</h3>
            //   </div>
            //   <div>
            //     <h2><small><FaChevronRight /></small> Watch Videos</h2>
            //   </div>
            // </aside>