import React, { useEffect, useState } from "react";
import './Shop.css';
import Product from "../Product/Product";
const Shop=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return(
        <div className="shop">
            <div className="product-container">
               {
                products.map((product)=><Product product={product} key={product.id}></Product>)
               }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
            </div>
        </div>
    )
}
export default Shop;