import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import {
  graphql,
} from 'gatsby';
import styles from "./../styles/pages.module.scss"

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
  const tools = data.contentfulProfile.tools
  const skills = data.contentfulProfile.skills
  console.log(data.contentfulProfile.tools)
  return (
    <Layout>
    <SEO title="About Me"/>
      <div>
        <h1>about me</h1>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: data.contentfulProfile.childContentfulProfileLongBioTextNode.childMarkdownRemark.html }}></div>
      </div>
      <div className={styles.aboutSkills}>
        <div>
          <h4>
            Tools
          </h4>
          <ul>
            {tools.map((tool, i) => {
              return <li key={i}>{tool}</li>
            })}
          </ul>
        </div>
        <div>
          <h4>
            Skills
          </h4>
          <ul>
            {skills.map((skill, i) => {
              return <li key={i}>{skill}</li>
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default About;
