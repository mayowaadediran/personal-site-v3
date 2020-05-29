import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { graphql } from 'gatsby';
import './../styles/pages.scss'

// export const query = graphql `
//   query WorksPageQuery {
//    allContentfulWorks {
//      edges {
//        node {
//          github
//          description
//          category
//          title
//          link
//          tag
//          image {
//            file {
//              url
//            }
//          }
//        }
//      }
//    }
//   }
// `

const Works = ({data}) => {

  // const professionalWork = data.allContentfulWorks.edges.filter(item => item.node.category === "Professional")
  // const personalWork = data.allContentfulWorks.edges.filter(item => item.node.category === "Personal")

  return (
    <>
      <Layout>
        <div>
          <h2>Projects</h2>
        </div>
        {/* <div>
          <div className={styles.cardContainer}>
            {professionalWork.map((work, i) => {
              return <WorkCard works={work} key={i}/>
            })}
          </div>
        </div>
        <div>
          <h5>Sides Projects</h5>
          <div className={styles.cardContainer}>
            {personalWork.map((work, i) => {
              return <WorkCard works={work} key={i}/>
            })}
          </div>
        </div> */}
      </Layout>
    </>
  );
}

export default Works;
