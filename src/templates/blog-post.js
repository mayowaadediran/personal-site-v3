import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({data}) => {
  console.log(data)
  const post = data.allContentfulWritings.edges[0].node
  return (
    <Layout>
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
