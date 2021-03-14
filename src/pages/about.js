import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby"
import "./../styles/pages.scss"

const About = ({ data }) => (
  <>
    <SEO title="Hi!" />
    <Layout>
      <div className="index-head">
        <h1>About me</h1>
      </div>
      <div></div>
      <div>
        <h2>Experience</h2>
      </div>
    </Layout>
  </>
)

export default About

// export const query = graphql`
//   query HomePageQuery {
//     contentfulProfileShortBioTextNode {
//       childMarkdownRemark {
//         html
//       }
//     }
//   }
// `
