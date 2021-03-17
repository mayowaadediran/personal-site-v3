import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "./../styles/pages/projects.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const query = graphql`
  query ProjectsQuery {
    allContentfulProjects {
      edges {
        node {
          title
          description
          link
          tag
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const Project = ({ title, description, tags, link, image }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} />
      </div>
      <div className="project-details">
        <div className="project__title">
          <h2 className="project__title-name">{title}</h2>

          {link ? (
            <a href={link ? link : "#"} className="project__title-icon">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          ) : null}
        </div>
        <p className="project__description">{description}</p>
        <ul className="project__tag">
          {tags &&
            tags.map((tag, i) => (
              <li className="project__tag--item" key={i}>
                {tag}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

const Works = ({ data }) => {
  const projects = data.allContentfulProjects.edges

  return (
    <>
      <SEO title="Projects" />
      <Layout>
        <div className="page__head">
          <h2>Projects</h2>
        </div>

        <div className="project-list">
          {projects.map((project, i) => (
            <Project
              key={i}
              title={project.node.title}
              description={project.node.description}
              link={project.node.link}
              tags={project.node.tag}
              image={project.node.image.file.url}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Works
