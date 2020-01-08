import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  graphql,
} from 'gatsby';
import Image from "../components/image"
import styles from "./../styles/pages.module.scss"


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
    <div className={styles.indexHead}>
      <h1>
        Hi, I 'm Mayowa
      </h1>
      <Image />
    </div>
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
