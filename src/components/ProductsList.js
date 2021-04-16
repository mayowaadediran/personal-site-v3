import React from "react"
import Product from "./Product"

function ProductsList({ products }) {
  return (
    <div className="flex flex-wrap justify-center md:justify-between w-full">
      {products.map(product => (
        <Product id={product.node.id} product={product.node} />
      ))}
    </div>
  )
}

export default ProductsList
