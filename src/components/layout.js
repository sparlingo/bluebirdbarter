import React from "react"
import PropTypes from "prop-types"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import { useStaticQuery, graphql, Link } from "gatsby"

import Navbar from './navbar'
import Footer from './footer'
import './styles.scss'
import "react-netlify-identity-widget/styles.css"

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name = (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name )
  const isLoggedIn = identity && identity.isLoggedIn

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
      <Navbar />
      <section className="main-content columns is-fullheight">
        <div className="column is-2">
          <nav style={{ background: "green" }}>
            {" "}
            Login Status:
            <button className="btn" onClick={() => setDialog(true)}>
              {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
            </button>
          </nav>
          <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        </div>
        <div className="column is-10">
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