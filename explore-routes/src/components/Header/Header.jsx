import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/products">Products</Link>
        </div>
    )
}

export default Header;