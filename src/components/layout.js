/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Logo from "./../images/Logo.png"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => {

  return (
      <div
        style={{
          margin: `0 auto`,
          minHeight: `100vh`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        }}
      >
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, }}>
            <img src={Logo} alt="Mayowa Adediran"/>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/about/">about me</ListLink>
            <ListLink to="/works/">works</ListLink>
            <ListLink to="/writings/">writings</ListLink>
          </ul>
        </header>
        <main>
          {children}
        </main>
        <footer
          style={{
            display: `flex`,
            justifyContent: `space-between`
          }}>
          <p>
          © {new Date().getFullYear()}, Mayowa Adediran 
          </p>
          <ul  
            style={{
              display: `flex`,
              justifyContent: `space-between`,
            }}>
            <li style={{ display: `inline-block`, marginLeft: `1rem` }}>
              <a href='https://github.com/mayowaadediran' target='blank'>Github</a>
            </li>
            <li style={{ display: `inline-block`, marginLeft: `1rem` }}>
              <a href='https://www.linkedin.com/in/mayowa-adediran/' target='blank' >LinkedIn</a>
            </li>
          </ul>
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
