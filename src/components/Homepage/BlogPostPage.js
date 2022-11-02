import React from 'react'
import {BlogCard} from './BlogCard'

import dummy from "../../assets/dummy1.jpg"
import { NavBar } from '../NavBar'
import { FaFacebook, FaFacebookSquare, FaLinkedin, FaShare, FaTwitterSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'

export const BlogPostPage = () => {
  return (
    <div className='container' id='blogPost'>
      <NavBar />
      <div className='container--item'>
        <img src={dummy} alt="dummy" />
        <div className='title'>
          <h3>Category: Funding</h3>
          <h2>Tech Desk just closed a multi million deal with TechStars Texas</h2>
          <div className='share--buttons'>
            <h3><a href="/" target="_blank"><FaTwitterSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repudiandae totam odio veritatis error obcaecati, facere aspernatur deleniti exercitationem ducimus? Reprehenderit iusto voluptatum veritatis eligendi, illo eveniet deserunt doloremque nulla. Asperiores reiciendis similique fuga itaque fugit officiis officia aspernatur deserunt possimus omnis obcaecati dolore aut, ratione accusamus sequi atque temporibus est quod nam sit ipsum enim cupiditate. Tempore autem consequatur, similique inventore consectetur ex tempora quis praesentium minima id quo repellendus quibusdam, molestias aut vero itaque. Illo doloribus eaque qui, reprehenderit inventore facere sequi reiciendis, aut vitae ipsa ratione aliquid nemo accusamus ipsum ullam, dignissimos quasi expedita repellendus voluptatem perferendis totam possimus eligendi blanditiis iusto! Possimus quisquam nam unde. Sunt sequi quis et voluptatum asperiores, reprehenderit esse error labore, molestias perspiciatis pariatur! Placeat itaque pariatur similique sapiente aspernatur reiciendis. Repellat nemo labore quam accusamus quaerat, laborum aliquam sequi adipisci rerum facilis nobis nulla natus blanditiis exercitationem magnam iste libero consequatur ducimus soluta pariatur ipsa neque? Doloremque tenetur consequuntur, a nulla id expedita repudiandae accusamus ipsam ut, iusto saepe cum dolores odio itaque, minima earum? Optio quaerat ipsum vitae consectetur eos debitis eligendi itaque voluptatem illum harum dolor dignissimos eveniet earum veniam animi, maxime voluptas officia id sequi. Accusamus ab illum explicabo vero dolorem, ratione modi recusandae corrupti laborum, aut, reiciendis blanditiis assumenda! Inventore, minus impedit dolorem harum, nobis porro nostrum est omnis consectetur debitis possimus voluptatum sapiente mollitia recusandae nemo molestias ipsum distinctio culpa quaerat. Doloribus, temporibus aperiam perspiciatis, obcaecati saepe sunt consequuntur omnis, excepturi dolorum debitis non! Enim, officiis possimus aperiam culpa recusandae omnis rem sunt dolore. Doloremque unde laboriosam voluptatem fugiat beatae eaque porro ut laudantium eveniet, repellendus deserunt quod nisi nostrum, dicta exercitationem! Quas vel facere a, consequuntur ex iure alias, amet dolorem quisquam laboriosam in sequi cumque, minima dicta esse sint officiis temporibus nobis! Aliquid, sit?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repudiandae totam odio veritatis error obcaecati, facere aspernatur deleniti exercitationem ducimus? Reprehenderit iusto voluptatum veritatis eligendi, illo eveniet deserunt doloremque nulla. Asperiores reiciendis similique fuga itaque fugit officiis officia aspernatur deserunt possimus omnis obcaecati dolore aut, ratione accusamus sequi atque temporibus est quod nam sit ipsum enim cupiditate. Tempore autem consequatur, similique inventore consectetur ex tempora quis praesentium minima id quo repellendus quibusdam, molestias aut vero itaque. Illo doloribus eaque qui, reprehenderit inventore facere sequi reiciendis, aut vitae ipsa ratione aliquid nemo accusamus ipsum ullam, dignissimos quasi expedita repellendus voluptatem perferendis totam possimus eligendi blanditiis iusto! Possimus quisquam nam unde. Sunt sequi quis et voluptatum asperiores, reprehenderit esse error labore, molestias perspiciatis pariatur! Placeat itaque pariatur similique sapiente aspernatur reiciendis. Repellat nemo labore quam accusamus quaerat, laborum aliquam sequi adipisci rerum facilis nobis nulla natus blanditiis exercitationem magnam iste libero consequatur ducimus soluta pariatur ipsa neque? Doloremque tenetur consequuntur, a nulla id expedita repudiandae accusamus ipsam ut, iusto saepe cum dolores odio itaque, minima earum? Optio quaerat ipsum vitae consectetur eos debitis eligendi itaque voluptatem illum harum dolor dignissimos eveniet earum veniam animi, maxime voluptas officia id sequi. Accusamus ab illum explicabo vero dolorem, ratione modi recusandae corrupti laborum, aut, reiciendis blanditiis assumenda! Inventore, minus impedit dolorem harum, nobis porro nostrum est omnis consectetur debitis possimus voluptatum sapiente mollitia recusandae nemo molestias ipsum distinctio culpa quaerat. Doloribus, temporibus aperiam perspiciatis, obcaecati saepe sunt consequuntur omnis, excepturi dolorum debitis non! Enim, officiis possimus aperiam culpa recusandae omnis rem sunt dolore. Doloremque unde laboriosam voluptatem fugiat beatae eaque porro ut laudantium eveniet, repellendus deserunt quod nisi nostrum, dicta exercitationem! Quas vel facere a, consequuntur ex iure alias, amet dolorem quisquam laboriosam in sequi cumque, minima dicta esse sint officiis temporibus nobis! Aliquid, sit?
        </p>
        <div className='flex'>
            <p>Share this story:</p>
            <h3><a href="/" target="_blank"><FaTwitterSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaWhatsappSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaFacebookSquare /></a></h3>
            <h3><a href="/" target="_blank"><FaLinkedin /></a></h3>
          </div>
        <div className='more'>
          <h3>More Stories from $Category:</h3>
          <div className='posts'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className='comment--box'>
          facebook comment plug in
        </div>
      </div>
    </div>
  )
}
