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
        <div className="mb-4 mt-5">
          <h1 className="font-bold text-xl mb-2">About me</h1>
          <div
            className="long-bio"
            dangerouslySetInnerHTML={{ __html: longBio }}
          ></div>
        </div>

        <div>
          <h1 className="font-bold text-xl mb-2">Experience</h1>
          <div>
            <div>
              <span className="text-sm mr-2 pr-2 border-r">2020 till date</span>
              <span className="text-sm">
                Software Developer • Kuda Microfinance Bank
              </span>
            </div>
            <div>
              <span className="text-sm mr-2 pr-2 border-r">
                Apr 2020 - September 2020
              </span>
              <span className="text-sm">Frontend Developer • Swipemax</span>
            </div>
            <div>
              <span className="text-sm mr-2">April 2019 - March 2020</span>
              <span className="text-sm">
                Software Developer • Kuda Microfinance Bank
              </span>
            </div>

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
