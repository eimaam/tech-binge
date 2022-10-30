import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
        <div className='footer--container'>
            <div>
                <h2>Tech Bang!</h2>
                <p>...if Tech thrives, we thrive!</p>
            </div>
            <div>
                <h3>Stay connected with us</h3>
                <FaTwitter /><FaLinkedinIn /><FaInstagram />
            </div>
            <div>
                <p>All rights reserved</p>
                <p>Tech Desk Inc. &copy; 2022</p>
            </div>
        </div>
    </footer>
  )
}
