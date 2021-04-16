import React from "react"

function Product({ product }) {
  return (
    <div className="w-11/12	md:w-9/20 max-w-7xl bg-gray-300 mb-10">
      <div className="w-full h-96">
        <img
          src={product.images[0].originalSrc}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-white">dsd</div>
    </div>
  )
}

export default Product
