import React from 'react'
import logo from "../assets/smileLogo.png"
import Styles from "../Styles/Header.module.css"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <div className={Styles.logo}>
            <img src={logo} alt="" />
            <h1>EverSmile</h1>
        </div>
        <div className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/doctors">Find Doctor</NavLink>
            <NavLink to="/cabin">Cabins</NavLink>
            <NavLink to="/test">tests</NavLink>
            <NavLink to="/nurses">Find Nurses</NavLink>
            
        </div>
    </div>
  )
}

export default Header