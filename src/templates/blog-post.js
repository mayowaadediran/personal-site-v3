import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default ({data}) => {
  console.log(data)
  const post = data.allContentfulWritings.edges[0].node
  return (
    <Layout>
      <SEO 
        title={post.title} 
        description ={post.description}
        article
        image={post.image}
        />
      <div>
        <h2>
          {post.title}
        </h2>
      </div>
    </Layout>
  )
}

// export const query = graphql `
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export const query = graphql `
  query($slug: String!) {
    allContentfulWritings(sort: {fields: id}, filter: {slug: {eq: $slug}}) {
      edges {
        node {
          createdAt(fromNow: true)
          slug
          title
          updatedAt
          body {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
        }
      }
    }
  }
`
