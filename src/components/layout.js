import React from "react"
import PropTypes from "prop-types"
import Logo from "./../images/Logo.png"
import { Link } from "gatsby"
import styles from "./../styles/layout.module.scss"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
 
const NavLink = props => (
  <Link to={props.to} className={styles.navLink} activeClassName={styles.navActive}>
    {props.children}
  </Link>
)

const Layout = ({ children }) => {

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            <img src={Logo} alt="Mayowa Adediran" />
          </Link>
          <nav className={styles.nav}>
            <NavLink to="/">Hi</NavLink>
            <NavLink to="/works/">Works</NavLink>
            <NavLink to="/writings/">Writings</NavLink>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()}, Mayowa Adediran</p>
          <ul className={styles.social}>
            <li style={{ display: `inline-block`, marginLeft: `1rem` }}>
              <a href="https://github.com/mayowaadediran" target="blank">
                <FaGithub />
              </a>
            </li>
            <li style={{ display: `inline-block`, marginLeft: `1rem` }}>
              <a
                href="https://www.linkedin.com/in/mayowa-adediran/"
                target="blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
