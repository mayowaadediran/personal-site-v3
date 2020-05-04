import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import './../styles/pages.scss'

const IndexPage = ({data}) => (
  <>
    <SEO 
      title="Hi!"
    />
    <Layout>
      <div className="index-head">
        <h1>
          Hi, I'm Mayowa
        </h1>
      </div>
      <div
        className="index-body"
        dangerouslySetInnerHTML={{ __html: data.contentfulProfileShortBioTextNode.childMarkdownRemark.html }}
        >
      </div>
    </Layout>
  </>
)

export default IndexPage


export const query = graphql `
  query HomePageQuery {
   contentfulProfileShortBioTextNode {
     childMarkdownRemark {
       html
     }
   }
  }
`