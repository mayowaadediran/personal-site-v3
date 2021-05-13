import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function ProductPage() {
  return <Layout></Layout>
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
          priceRange {
            maxVariantPrice {
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
