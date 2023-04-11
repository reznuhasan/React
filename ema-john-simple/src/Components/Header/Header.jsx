import React from "react";
import logo from '../../assets/Logo.svg'
import './Header.css'
const Header=()=>{
    return(
        <div className="header">
            <div className="img-box">
               <img src={logo} alt="" />
            </div>
            <div className="menu">
                <a href="order">Order</a>
                <a href="review">Order Review</a>
                <a href="inventory">Manage Inventory</a>
                <a href="login">Login</a>
            </div>
        </div>
    )
}

export default Header;