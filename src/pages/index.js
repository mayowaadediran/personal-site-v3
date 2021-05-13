import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "./../styles/pages/home.scss"
import Img from "gatsby-image"

const Index = ({ data }) => {
  const shortBio = data.allContentfulProfile.edges[0].node.shortBio.shortBio
  const selfie = data.allContentfulProfile.edges[0].node.selfie.fluid

  return (
    <>
      <SEO title="Hi!" />
      <Layout>
        <div className="home">
          <div className="image_selfie">
            <Img fluid={selfie} />
          </div>
          <div className="index-head">
            <h1 className="mt-9 mb-9 font-bold text-2xl">
              Hi <span role="img">👋🏿</span>, I'm Mayowa
            </h1>
          </div>
          <div className="index-body">
            <p className="text-base">{shortBio}</p>
          </div>
          <div className="mt-5">
            <p>You can reach me via email: ddrn_mayowa@yahoo.com</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index

export const query = graphql`
  query HomePageQuery {
    allContentfulProfile {
      edges {
        node {
          shortBio {
            shortBio
          }
          selfie {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    file {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
