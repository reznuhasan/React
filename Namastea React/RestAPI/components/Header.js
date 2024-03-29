
import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <h1>Explore World</h1>
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blog">blog</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header