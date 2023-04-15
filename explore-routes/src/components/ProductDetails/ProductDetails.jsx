import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails=()=>{
    const product=useLoaderData()
    console.log(product)
    return(
        <div>
            <h2>Everything you want to know about this product</h2>
        </div>
    )
}

export default ProductDetails;