import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { graphql } from 'gatsby';
import './../styles/pages.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const query = graphql `
  query ProjectsQuery {
    allContentfulProjects {
      edges {
        node {
          github
          title
          description
          link
          tag
        }
      }
    }
  }
`

const Project = ({title, description, tags, link, github}) => {
  return (
    <div className="project">
      <div className="project__title">
        <h2 className="project__title-name">
          {title}
        </h2>
          <a href={link} className="project__title-icon">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a href={github} className="project__title-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
      </div>
      <p className="project__description">
        {description}
      </p>
      <ul className="project__tag">
        {tags.map((tag, i) => 
          <li className="project__tag--item" key={i}>{tag}</li>
        )}
       
      </ul>
    </div>
  )
}


const Works = ({data}) => {

  const projects = data.allContentfulProjects.edges
  console.log(projects)

  return (
    <>
      <SEO 
        title="Projects"
      />
      <Layout>
        <div className="page__head">
          <h2>Projects</h2>
        </div>

        <div className="project-list">
          {projects.map((project, i) => 
            <Project
              key={i}
              title={project.node.title}
              description={project.node.description}
              link={project.node.link}
              github={project.node.github}
              tags={project.node.tag}
            />
          )}
        </div>
      </Layout>
    </>
  );
}

export default Works;
