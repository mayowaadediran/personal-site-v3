import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "./../styles/pages/home.scss"
import Img from "gatsby-image"

const Shop = ({}) => {
  return (
    <>
      <SEO title="Hi!" />
      <Layout></Layout>
    </>
  )
}

export default Shop
