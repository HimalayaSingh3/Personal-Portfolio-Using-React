import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useEffect,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faMultiply}from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
const Header = () => {
  useEffect(()=>{
    Aos.init();
  },[])

  const [menu,setMenu]=useState("home")
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-200px"
  }

  return (
            <nav>
                <h1>HIMALAYA</h1>
                <ul id="sideMenu" ref={menuRef}>
                    <NavLink to="/"><li className="active">Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/services"><li>Services</li></NavLink>
                    <NavLink to="/skills"><li>Skills</li></NavLink>
                    <NavLink to="/projects"><li>Projects</li></NavLink>
                    <NavLink to="/certificates"><li>Certificates</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                    <FontAwesomeIcon icon={faMultiply} onClick={closeMenu} className="nav-close" />
                </ul>
                <FontAwesomeIcon icon={faBars} onClick={openMenu} className="nav-open"/>
            </nav>
  )
}

export default Header
