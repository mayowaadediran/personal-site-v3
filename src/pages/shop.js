import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "./../styles/pages/home.scss"
import Img from "gatsby-image"
import ProductsList from "../components/ProductsList"

export const query = graphql`
  query ShopQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          productType
          vendor
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

const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges
  console.log(products)
  return (
    <>
      <SEO title="Online Dev Shop" />
      <Layout>
        <ProductsList products={products ? products : []} />
      </Layout>
    </>
  )
}

export default Shop
