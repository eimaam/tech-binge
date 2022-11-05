import React from 'react'
import { FaBars, FaMoon, FaSearch, FaTimes } from "react-icons/fa"
import { CgMenuGridO } from "react-icons/cg"
import { Link } from 'react-router-dom'


import logo from "../assets/techDesk_logo.png"
import { useAuth } from '../context/AuthContext'


export const NavBar = () => {

    const { logOut } = useAuth()

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
        <div className='nav--container'>
            <div>
                <h2>Tech Binge</h2>
            </div>
            <ul id='menu'>
                <li><Link to="/">Home</Link></li>
                <li>Tech</li>
                <li>Cryptocurrency</li>
                <li>How-Tos</li>
                <li>Economy</li>
                <li>Startups</li>
            </ul>
            <div id='icons'>
                <h2><CgMenuGridO /></h2>
                <h2><FaSearch /></h2>
            </div>
        </div>
        {/* <div>
            <FaBars id='showNav' onClick={toggleNav}/>
            <FaTimes id='closeNav' onClick={toggleNav}/>
            <img src={logo} alt="" />
            <FaMoon onClick={toggleMode} id="mode"/>
            <button className='btn--small' onClick={logOut}>Sign out</button>
        </div> */}
        {/* <ul id='menu'>
            <li><Link to="/">Home</Link></li>
            <li>Tech News</li>
            <li>Business</li>
            <li>How-Tos</li>
            <li>Cryptocurrency</li>
            <li>Economy</li>
            <li>Accidents</li>
            <li>Transport & Logistics</li>
            <li>Startups</li>
        </ul> */}
    </nav>
  )
}
