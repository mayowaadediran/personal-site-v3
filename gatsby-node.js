const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
     allContentfulWritings {
       edges {
         node {
           createdAt
           slug
           childContentfulWritingsBodyTextNode {
             childMarkdownRemark {
               html
               timeToRead
             }
           }
           title
         }
       }
     }
    }
  `)
  result.data.allContentfulWritings.edges.forEach(({ node }) => {
    createPage({
      path: `writings/${node.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}