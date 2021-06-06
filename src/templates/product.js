import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function ProductPage({ data }) {
  const details = data.allShopifyProduct.edges[0].node

  const [selectedVariant, setSelectedVariant] = useState([])

  //additemtocart

  console.log(details)
  return (
    <Layout>
      <div className="w-full">
        <div className="w-11/12 h-96 bg-gray-300">
          <img
            className="w-full h-full object-contain"
            src={details.images[0].originalSrc}
            alt={details.title}
          />
        </div>
        <div className="mt-3">
          <h4 className="font-bold">{details.title}</h4>
          <p>
            <span className="text-xs">
              {details.priceRange.minVariantPrice.currencyCode}
            </span>
            {details.priceRange.minVariantPrice.amount}
          </p>
          <button className="bg-gray-700 py-1 px-10 text-white mt-5">
            Add To Cart
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage

export const query = graphql`
  query($productId: String!) {
    allShopifyProduct(
      sort: { fields: id }
      filter: { id: { eq: $productId } }
    ) {
      edges {
        node {
          id
          title
          handle
          productType
          vendor
          description
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants {
            id
            title
            price
          }
          images {
            originalSrc
          }
        }
      }
    }
  }
`
