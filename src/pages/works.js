import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import WorkCard from "../components/WorkCard"
import {
  graphql,
} from 'gatsby';

export const query = graphql `
  query WorksPageQuery {
   allContentfulWorks {
     edges {
       node {
         github
         description
         category
         title
         link
         tag
       }
     }
   }
  }
`

const Works = ({data}) => {

  const professionalWork = data.allContentfulWorks.edges.filter(item => item.node.category === "Professional")
  const personalWork = data.allContentfulWorks.edges.filter(item => item.node.category === "Personal")

  return (
    <Layout>
      <SEO 
        title="Work" 
        description="Work done as a part of a team or personally"
      />
      <div>
        <h5>Work done as a part of a team</h5>
        <WorkCard works={professionalWork}/>
      </div>
      <div>
        <h5>Personal Work</h5>
        <WorkCard works={personalWork}/>
      </div>
    </Layout>
  );
}

export default Works;
