import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby"
import "./../styles/pages/about.scss"

const About = ({ data }) => {
  const longBio = data.contentfulProfileLongBioTextNode.childMarkdownRemark.html
  return (
    <>
      <SEO title="About" />
      <Layout>
        <div className="mb-4">
          <h1 className="font-bold text-xl mb-2">About me</h1>
          <div
            className="long-bio"
            dangerouslySetInnerHTML={{ __html: longBio }}
          ></div>
        </div>

        <div>
          <h1 className="font-bold text-xl mb-2">Experience</h1>
          <div>
            <h1>Kuda Microfinance Bank</h1>
            <p className="text-sm">Software Developer</p>
            <p></p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About

export const query = graphql`
  query AboutPageQuery {
    contentfulProfileLongBioTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`
