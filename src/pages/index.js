import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  graphql,
} from 'gatsby';

export const query = graphql `
  query HomePageQuery {
   contentfulProfileShortBioTextNode {
     childMarkdownRemark {
       html
     }
   }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hi, I 'm Mayowa
    </h1>
    <div
      dangerouslySetInnerHTML={{ __html: data.contentfulProfileShortBioTextNode.childMarkdownRemark.html }}
    >
    </div>
    <h4>
      Latest writings
    </h4>
  </Layout>
)

export default IndexPage
