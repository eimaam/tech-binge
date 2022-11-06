import React, { useEffect } from 'react'
import { FaAlignRight, FaAngleRight, FaArrowAltCircleDown, FaBusinessTime, FaChevronRight, FaCode, FaLongArrowAltRight, FaMoneyBill, FaMoneyBillAlt, FaPeopleArrows, FaRegKissWinkHeart } from 'react-icons/fa'
import { BlogCard } from './BlogCard'
import { NavBar } from '../NavBar'
import { HeadPost } from './HeadPost'
import { CategoryCard} from './CategoryCard'
import { Section } from './Section'
import { useAuth } from '../../context/AuthContext'
import { WatchVideos } from './WatchVideos'
import { LatestStories } from './LatestStories'

// AOS import
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export const Homepage = () => {
  useEffect(() => {
    AOS.init({delay: 700, duration: 700, easing: 'ease-out'})
  }, [])

  const { allPosts } = useAuth();
  return (
    <div className='container' id='homepage'>
      <NavBar />
        <div className='container--item' data-aos="fade-down">
          <HeadPost data-aos="fade-down"/>
          <hr />
          <LatestStories data-aos="fade-up"/>
          <hr />
          <Section />
          <hr />
          <CategoryCard 
          sectionTitle="How-Tos:"
          posts={allPosts}
          start={4}
          end={8}
          />
          <hr />
          <CategoryCard 
          sectionTitle="Technology:"
          posts={allPosts}
          start={4}
          end={8}
          />
          <hr />
          <WatchVideos />
          <hr />
          <CategoryCard 
          sectionTitle="Cryptocurrency:"
          posts={allPosts}
          start={4}
          end={8}
          />
          
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