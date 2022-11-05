import React from 'react'
import { FaBars, FaBitcoin, FaBrain, FaCode, FaGraduationCap, FaHome, FaLightbulb, FaMoneyBill, FaMoon, FaRocketchat, FaSearch, FaTimes, FaTools, FaTshirt, FaVideo, FaWatchmanMonitoring } from "react-icons/fa"
import { CgMenuGridO } from "react-icons/cg"
import { Link } from 'react-router-dom'


import logo from "../assets/techDesk_logo.png"
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'


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

    const [showMenu, setShowMenu] = useState(false)

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
                <h2><Link to="/">Tech Binge</Link></h2>
            </div>
            <ul id='menu--list--desktop'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Events </Link></li>
                <li><Link to="/">How-Tos</Link></li>
                <li><Link to="/">Tech</Link></li>
                <li><Link to="/">Business</Link></li>
                <li><Link to="/">Education</Link></li>
                <li><Link to="/">Cryptocurrency</Link></li>
                <li><Link to="/">Development</Link></li>
                <li><Link to="/">Startups</Link></li>
                <li><Link to="/">Fashion & Lifestyle</Link></li>
                <li><Link to="/">Videos - Watch on T-Binge!</Link></li>
            </ul>
            {showMenu && 
            <ul className='menu--list--mobile'>
                <input type="text" placeholder='Search...' />
                <br />
                <li><Link to="/"><FaHome /> Home</Link></li>
                <li><Link to="/"><FaVideo /> Events </Link></li>
                <li><Link to="/"><FaLightbulb /> How-Tos</Link></li>
                <li><Link to="/"><FaTools /> Tech</Link></li>
                <li><Link to="/"><FaMoneyBill /> Business</Link></li>
                <li><Link to="/"><FaGraduationCap /> Education</Link></li>
                <li><Link to="/"><FaBitcoin /> Cryptocurrency</Link></li>
                <li><Link to="/"><FaCode /> Development</Link></li>
                <li><Link to="/"><FaCode /> Startups</Link></li>
                <li><Link to="/"><FaTshirt /> Fashion & Lifestyle</Link></li>
                <li><Link to="/"><FaVideo /> Videos - Watch on T-Binge!</Link></li>
                <br />
                <button className='btn--secondary' onClick={logOut}>Sign Out</button>
            </ul>
            }
            <div id='icons'>
                <h2 onClick={() => setShowMenu(!showMenu)}><CgMenuGridO /></h2>
                <h2 onClick={() => setShowMenu(!showMenu)}><FaSearch /></h2>
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
            <li><Link to="/">Tech News</li>
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
