import React from 'react';
// import styles from './../../styles/pages.module.scss'

const index = (props) => {
  return (
    <div className="title">
      <h5>
        {props.title}
      </h5>
      <small>{props.createdAt}</small> 
      <p>{props.description}</p>
      <small> {props.tags.map(tag => <span>{tag} </span>)}</small>
    </div>
  );
}

export default index;


