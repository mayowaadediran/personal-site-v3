import React from 'react';
// import styles from './../../styles/pages.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const index = (props) => {
  const work = props.works
  console.log(work)
  return (
    <div className="card"
      style={work.node.image !== null ? {"background-image" : `linear-gradient(rgba(102, 102, 102, 0.86), rgba(102, 102, 102, 0.86)), url(${work.node.image.file.url})`, 
      backgroundPosition: 'center', 
      backgroundColor: '#ccc',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'} : {backgroundColor: "rgba(102, 102, 102, 0.86)"}}>
      <h5>{work.node.title}</h5>
      <p>{work.node.description}</p>
      <div className="cardBottom">
        <ul className="tags">
          {work.node.tag
            ? work.node.tag.map((tags, i) => {
                return <h6 key={i}>{tags}</h6>
              })
            : null}
        </ul>
      </div>
      <div className="link">
        {work.node.link ? (
          <a href={work.node.link}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        ) : null}
        {work.node.github ? (
          <a href={work.node.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default index;
