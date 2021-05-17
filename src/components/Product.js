import { Link } from "gatsby"
import React from "react"

function Product({ product }) {
  return (
    <div className="w-11/12	md:w-9/20 max-w-7xl  mb-10 shadow">
      <div className="w-full h-96 bg-gray-300">
        <img
          src={product.images[0].originalSrc}
          className="w-full h-full object-contain"
          alt={product.title}
        />
      </div>
      <div className="bg-white p-3 text-center">
        <p> {product.title}</p>

        <p className="font-bold text-sm mb-2">
          <span className="text-xs">
            {product.priceRange.maxVariantPrice.currencyCode}
          </span>
          <span>{product.priceRange.maxVariantPrice.amount} </span>
        </p>
        <Link
          to={`/shop/${product.handle}`}
          className="bg-gray-700 py-1 px-10 text-white"
        >
          View
        </Link>
      </div>
    </div>
  )
}

export default Product
