import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export const query = graphql `
  query WorksPageQuery {
    allContentfulWorks {
      edges {
        node {
          title
          description
          link
          image {
            file {
              url
            }
          }
          category
          tag
        }
      }
    }
  }
`

const Works = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <div>
        <h1>works</h1>
        <p>Work done personally or professionally as part of a team</p>
      </div>
      <div>
        
      </div>
      <div>

      </div>
    </Layout>
  );
}

export default Works;
