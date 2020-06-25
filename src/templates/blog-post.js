import React, { Component } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import moment from 'moment'

export default class BlogPost extends Component {
  
  render() {
    const post = this.props.data.allContentfulWritings.edges[0].node
    
    return (
      <Layout>
        <SEO 
          title={post.title} 
          description ={post.description.description}
        />
          {/* <div className="article">
            <div className="article-head">
              <h2>
                {post.title} 
              </h2>
              <p>
               {moment(post.createdAt).format('ll')}  | {post.tags.map((tag, i) => <span className="tag">{tag}{i < post.tags.length - 1 ? ',' : null} </span>)}
              </p>
              <i>{post.description.description}</i>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}>
            </div>
          </div> */}
      </Layout>
    )
  }
}


// export const query = graphql `
//   query($slug: String!) {
//     allContentfulWritings(sort: {fields: id}, filter: {slug: {eq: $slug}}) {
//       edges {
//         node {
//           createdAt
//           slug
//           title
//           description {
//             description
//           }
//           tags
//           updatedAt
//           body {
//             childMarkdownRemark {
//               html
//               timeToRead
//             }
//           }
//         }
//       }
//     }
//   }
// `
