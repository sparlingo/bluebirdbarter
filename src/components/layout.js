import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaHome, FaBook, FaBaseballBall, FaDoorClosed } from 'react-icons/fa'

import Footer from './footer'
import './styles.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <section className="main-content columns is-1">
        <div className="column is-narrow section">
          <p className="menu-label is-hidden-touch">
            Menu
          </p>
          <ul className="menu-list">
            <li>
              <Link to="/" exact-active-class="is-active">
                <FaHome />
              </Link>
            </li>
            <li>
              <Link to="/research" exact-active-class="is-active">
                <FaBook />
              </Link>
            </li>
            <li>
              <Link to="/players" exact-active-class="is-active">
                <FaBaseballBall />
              </Link>
            </li>
            <li>
              <Link to="/login" exact-active-class="is-active">
                <FaDoorClosed />
              </Link>
            </li>
          </ul>
        </div>

        <div className="column is-12">
          <main>{children}</main>
        </div>
      </section>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout