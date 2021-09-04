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
            <div className="mb-3">
              <div>
                <span className="text-sm font-bold">
                  Software Developer • Kuda Microfinance Bank |{" "}
                </span>
                <span className="mr-2 pr-2 text-xs font-semibold">
                  2020 till date
                </span>
              </div>

              <p className="text-xs leading-3">
                Building internal tools to deliver free banking to over 1
                million customers.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <h1 className="font-bold text-xl mb-2">Skills</h1>
          </div>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-bold text-xl mb-2">
              Languages/Tools/Framework
            </h1>
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
