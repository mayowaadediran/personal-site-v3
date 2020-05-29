import React, { Component } from 'react'
import Layout from '../components/layout';
import SEO from "../components/seo"
import { Link, graphql } from 'gatsby'
import BlogTitle from '../components/BlogTitle'
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
      <>
        <SEO 
          title="Writings"
          description="Thoughts, ideas and experiences as a software developer"
        />
        <Layout>
          <div className="writings">
          <div>
            <h2>Blog</h2>
          </div>
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
            <div className="pagination">
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
          </div>
        </Layout>
      </>
    )
  }
}

