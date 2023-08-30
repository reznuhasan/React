import { useState } from "react"

const useProduct=(id)=>{
    const [product,setProduct]=useState(null)
    const  LoadData=async()=>{
        const response=await fetch(`https://dummyjson.com/products/${id}`) ;
        const data=await response.json();
        setProduct(data)
    }
    useState(()=>{
        LoadData();
    },[])
    return product;
}

export default useProduct;