import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export const query = graphql `
  query AboutPageQuery {
    contentfulProfile {
      childContentfulProfileLongBioTextNode {
        childMarkdownRemark {
          html
        }
      }
      skills
      tools
      resume {
        file {
          url
        }
      }
    }
  }
`
const About = ({data}) => {
  return (
    <Layout>
    <SEO title="About Me"/>
      <h1>About Me</h1>
       <div
      dangerouslySetInnerHTML={{ __html: data.contentfulProfile.childContentfulProfileLongBioTextNode.childMarkdownRemark.html }}
    ></div>
    </Layout>
  );
}

export default About;
