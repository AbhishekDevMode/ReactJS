import React from 'react'

const ProductInfo = () => {
    const product={
        name:'Laptop',
        price:1200,
        availability:"In Stock"
    };
  return (
    <div>
        <h1>Name:{product.name}</h1>
        <h1>Price:${product.price}</h1>
        <h1>Availability:{product.availablity}</h1>
        ProductInfo
        </div>
  )
}

export default ProductInfo