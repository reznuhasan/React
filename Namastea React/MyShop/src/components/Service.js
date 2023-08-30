import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import Product from "./Product"
import { FindProducts } from "../Helper/Utljs"
import { Link } from "react-router-dom"
import useOnline from "../Helper/useOnline"

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
    setFilterProducts(FindProducts(allProducts,searchText))
  }
  const online=useOnline();
  console.log(online)
  if(!online){
    return <h1>Your are Offline.please check your internet connection</h1>
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
          filterProducts.map(product=><Link to={`/product/${product.id}`} key={product.id}><Product product={product} key={product.id}></Product></Link>)
        }
       </div>
      }
    </div>
  )
}

export default Service