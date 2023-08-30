
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import useProduct from "../Helper/useProduct";
const ProductDetails = () => {
    const { id } = useParams();
    const product=useProduct(id);
    return product === null ? (
       <div style={{
        "display":"flex",
        "justifyContent":"center",
        "margin":"20px 0"
       }}>
          <Shimmer />
       </div>
        
    ) : (
        <div className="product-detail-container">
            <div className="product-details">
                <div className="image">
                    <img src={product.thumbnail} alt="product image" />
                </div>
                <h1>{product.title}</h1>
                <h3>{product.brand},{product.category}</h3>
                <h3>{product.rating} star</h3>
                <h2>Price:{product.price}</h2>
            </div>
        </div>
    )
}

export default ProductDetails