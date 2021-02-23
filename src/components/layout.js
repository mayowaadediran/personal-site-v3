import React from "react"
import PropTypes from "prop-types"
import Logo from "./../images/Logo.png"
import { Link } from "gatsby"
import "./../styles/layout.scss"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">
        <nav className="main-nav">
          <Link to="/" className="main-nav__logo">
            <img src={Logo} alt="Mayowa Adediran" />
          </Link>
          <div className="main-nav__list">
            <Link
              to="/"
              className="main-nav__link"
              activeClassName="main-nav__link--active"
            >
              hi
            </Link>
            <Link
              to="/projects"
              className="main-nav__link"
              activeClassName="main-nav__link--active"
            >
              portfolio
            </Link>
            {/* <Link to="/blog" className="main-nav__link" activeClassName="main-nav__link--active">
              blog
            </Link> */}
          </div>
        </nav>
        <main className="main">{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()}, Mayowa Adediran</p>
          <ul className="social">
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
