import React from 'react'
import { FaBars, FaMoon, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'


import logo from "../assets/techDesk_logo.png"

export const NavBar = () => {

    const toggleNav = () => {
        const showNav = document.getElementById('showNav')
        const closeNav = document.getElementById('closeNav')
        const menu = document.getElementById('menu');

        if(menu.style.display !== "flex"){
            menu.style.display = "flex"
            showNav.style.display = "none"
            closeNav.style.display = "block"
        }else{
            menu.style.display = "none"
            showNav.style.display = "block"
            closeNav.style.display = "none"
        }
    }

    const myStyle = {
        backgroundColor: "black",
    }

    const toggleMode = () => {
        const body = document.getElementById('root')
        body.classList.add(myStyle)
    }

  return (
    <nav>
        <div>
            <FaBars id='showNav' onClick={toggleNav}/>
            <FaTimes id='closeNav' onClick={toggleNav}/>
            {/* <img src={logo} alt="" /> */}
            <FaMoon onClick={toggleMode} id="toggler"/>
        </div>
        <ul id='menu'>
            <li><Link to="/">Home</Link></li>
            <li>Tech News</li>
            <li>Business</li>
            <li>How-Tos</li>
            <li>Cryptocurrency</li>
            <li>Economy</li>
            <li>Accidents</li>
            <li>Transport & Logistics</li>
            <li>Startups</li>
        </ul>
    </nav>
  )
}
