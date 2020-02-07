import React from 'react';
import styles from './blogTitle.module.scss'

const index = (props) => {
  return (
    <div className={styles.title}>
      <h5>
        {props.title}
      </h5>
      <small>{props.createdAt}</small>
      <p>{props.description}</p>
    </div>
  );
}

export default index;



// import React from 'react';
// import Link from 'gatsby'

// const BlogTitle = (props) => {
//   return (
//     <div>
//      <Link to={props.to}>
//         <h3>
//           {props.title}
//         </h3>
//         <small>{props.createdAt}</small>
//         <p>{props.description}</p>
//       </Link>
//     </div>
//   );
// }

// export default BlogTitle;
