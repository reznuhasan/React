import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import Product from "./Product"

const Service = () => {
  const [allProducts,setAllProducts]=useState([])
  const [filterProducts,setFilterProducts]=useState([])
  useEffect(()=>{
    loadProducts();
  },[])
  async function loadProducts(){
    const response=await fetch('https://dummyjson.com/products');
    const data=await response.json();
    setFilterProducts(data?.products)
    setAllProducts(data?.products)
  }
  return allProducts.length===0?(
    <div className="allProducts">
      {
        Array.from({length:30}).map((_,index)=>
          <Shimmer key={index}></Shimmer>
        )
      }
    </div>
  ):(
    <div>
      {
       (filterProducts.length===0)?<div><h1>Product is not found</h1></div>:
       <div className="filterProducts">
        {
          filterProducts.map(product=><Product product={product} key={product.id}></Product>)
        }
       </div>
      }
    </div>
  )
}

export default Service