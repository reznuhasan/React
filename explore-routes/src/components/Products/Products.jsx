import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products=()=>{
    const product=useLoaderData();
    return(
        <div>
           <h3>Total Users:{product.length}</h3>
           {
            product.map(user=><Product product={user} key={user.id}/>)
           }
        </div>
    )
}

export default Products;