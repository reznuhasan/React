
import React from 'react'

const Product = React.memo(({product}) => {
    const {title,rating,brand,category,thumbnail,price}=product;
    console.log("re -render")
  return (
    <div className='card'>
      <div className="image">
        <img src={thumbnail} alt="product image" />
      </div>
      <h1>{title}</h1>
      <h3>{brand},{category}</h3>
      <h3>{rating} star</h3>
      <h2>Price:{price}</h2>
    </div>
  )
})

export default Product