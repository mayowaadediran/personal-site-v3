import React, { Component } from 'react'
import Layout from '../components/layout';
import SEO from "../components/seo"
import { Link, graphql } from 'gatsby'
import BlogTitle from '../components/BlogTitle/index'
import styles from '../styles/pages.module.scss'
import moment from 'moment'


class Writings extends Component {

  render() {
    const {data} = this.props
    const posts = data.allContentfulWritings.edges
    const { currentPage, numPages} = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/writings' : (currentPage - 1).toString()
    const nextPage = `/writings/${(currentPage + 1).toString()}`

    return (
      <Layout>
        <SEO 
          title="Writings"
          description="Thoughts, ideas and experiences as a software developer"
        />
        {posts.map(({node}) => {
          return (
            <div>
              <Link 
                style={{ boxShadow: 'none', textDecoration: 'none'}}
                to={`/writings/${node.slug}`}>
                <BlogTitle
                  title={node.title}
                  createdAt={moment(node.createdAt).format('ll')}
                  description={node.description.description}
                  tags={node.tags}
                />
              </Link>
            </div>
          )
        })}
        <div className={styles.pagination}>
          {!isFirst && (
            <Link to={prevPage} rel="prev">
               ← Previous Page
            </Link>
          )}
          {Array.from({length: numPages}, (_, i)=> (
              <Link to={`/writings/${i === 0 ? '' : i + 1}`}>
                {i + 1}
              </Link>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </Layout>
    )
  }
}



// const Writings = () => {
//   return (
//     <Layout>
//       <SEO 
//         title="Writings" 
//         description = "Essays on my thoughts, ideas and experiences in my progression as software developer"
//         />
//       <div>
//         <h1>writings</h1>
//         <p>Essays on my thoughts, ideas and experiences as a software developer</p>
//       </div>
//     </Layout>
//   );
// }

export default Writings;

export const query = graphql`
         query Writings($skip: Int!, $limit: Int!) {
           allContentfulWritings(
             sort: { order: DESC, fields: createdAt }
             limit: $limit
             skip: $skip
           ) {
             edges {
               node {
                 createdAt
                 body {
                   childMarkdownRemark {
                     html
                   }
                 }
                 title
                 tags
                 slug
                 description {
                   description
                 }
               }
             }
           }
         }
       `







