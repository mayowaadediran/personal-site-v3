const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `)

  console.log(JSON.stringify(result))

  const products = result.data.allShopifyProduct.edges

  products.forEach(product => {
    createPage({
      path: `shop/${product.node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        productId: product.node.id,
      },
    })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//      allContentfulWritings {
//        edges {
//          node {
//            createdAt
//            slug
//            childContentfulWritingsBodyTextNode {
//              childMarkdownRemark {
//                html
//                timeToRead
//              }
//            }
//            title
//          }
//        }
//      }
//     }
//   `)

//   const posts = result.data.allContentfulWritings.edges

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node
//     createPage({
//       path: `writings/${post.node.slug}`,
//       component: path.resolve(`./src/templates/blog-post.js`),
//       context: {
//         slug: post.node.slug,
//         previous,
//         next,
//       },
//     })
//   })

//   const postsPerPage = 10;
//   const numPages = Math.ceil(posts.length / postsPerPage)

//   Array.from({ length: numPages}).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/writings` : `/writings/${i + 1}`,
//       component: path.resolve('./src/templates/blog-page.js'),
//       context: {
//         limit: postsPerPage,
//         skip: i * postsPerPage,
//         numPages,
//         currentPage: i + 1
//       }
//     })
//   })
// }
