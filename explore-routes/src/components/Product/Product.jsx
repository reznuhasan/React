import React from "react";
import { Link } from "react-router-dom";

const Product=({product})=>{
    return(
        <div>
            <h1>Name:{product.name}</h1>

            <button><Link to={`/product/${product.id}`}>Show Product</Link></button>
        </div>
    )
}

export default Product