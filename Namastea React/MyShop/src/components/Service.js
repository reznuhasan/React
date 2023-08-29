import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import Product from "./Product"

const Service = () => {
  const [allProducts,setAllProducts]=useState([])
  const [filterProducts,setFilterProducts]=useState([])
  const [searchText,setSearchText]=useState("")
  useEffect(()=>{
    loadProducts();
  },[])
  async function loadProducts(){
    const response=await fetch('https://dummyjson.com/products');
    const data=await response.json();
    setFilterProducts(data?.products)
    setAllProducts(data?.products)
  }
  const handleSearch=()=>{
    setFilterProducts(allProducts.filter(product=>product?.title.toLowerCase().includes(searchText.toLowerCase())))
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
      <div className="searchBox">
        <input type="text" name="search" className="search" value={searchText} placeholder="search your products" onChange={(e)=>setSearchText(e.target.value)}/>
        <button className="searchBtn" onClick={handleSearch}>search</button>
      </div>
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