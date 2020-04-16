import React from 'react';
import styles from './../../styles/pages.module.scss'

const index = (props) => {
  return (
    <div className={styles.title}>
      <h5>
        {props.title}
      </h5>
      <small>{props.createdAt} | {props.tags.map(tag => <span>{tag} </span>)}</small>
      <p>{props.description}</p>
    </div>
  );
}

export default index;


