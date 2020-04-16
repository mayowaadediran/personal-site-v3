import React from 'react';
import styles from './../../styles/pages.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const index = (props) => {
  const works = props.works

  return (
    <div className={styles.cardContainer}>
      {works.map((work, i) => {
        return (
          <div className={styles.card} key={i}>
            <h5>{work.node.title}</h5>
            <p>{work.node.description}</p>
            <div className={styles.cardBottom}>
              <ul className={styles.tags}>
                {work.node.tag
                  ? work.node.tag.map((tags, i) => {
                      return <h6 key={i}>{tags}</h6>
                    })
                  : null}
              </ul>
            </div>
            <div className={styles.link}>
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
        )
      })}
    </div>
  );
}

export default index;
