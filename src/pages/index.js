import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import styles from "./../styles/pages.module.scss"

const IndexPage = ({data}) => (
  <>
    <SEO 
      title="Hi!"
    />
    <Layout>
      <div className={styles.indexHead}>
        <h1>
          Hi, I'm Mayowa
        </h1>
      </div>
        <div
          className={styles.indexBody}
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