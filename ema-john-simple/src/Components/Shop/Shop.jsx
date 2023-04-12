import React, { useEffect, useState } from "react";
import './Shop.css';
import Product from "../Product/Product";
const Shop=()=>{
    const [products,setProducts]=useState([]);
    const [item,setItem]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const AddProduct=(product)=>{
        const newArr=item.slice(0);
        newArr.push(product);
        setItem(newArr)
        console.log(newArr);
        
        console.log(price)
    }
    return(
        <div className="shop">
            <div className="product-container">
               {
                products.map((product)=><Product product={product} key={product.id} AddProduct={AddProduct}></Product>)
               }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <div className="calculation">
                    <h4>Total Items:{(item.length)?item.length:0}</h4>
                    <h4>Total Price:{
                        (item.length)?item.reduce((accum,curPrice)=>accum+curPrice.price,0):0
                        }</h4>
                </div>
                

            </div>
        </div>
    )
}
export default Shop;