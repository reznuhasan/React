import React from "react";
import './Product.css'
const Product=(props)=>{
    const {price,name,seller,ratings,img}=props.product;
    return(
        <div className="product">
           <img src={img} alt="" />
           <div className="details">
           <h3>{name.slice(0,20)}</h3>
           <h4>Price:${price}</h4>
           </div>
           <div className="ratings">
           <p>Manufacture:{seller}</p>
           <p>Rating:{ratings}</p>
           </div>
           <button>Add To Cart</button>
        </div>
    )
}

export default Product;