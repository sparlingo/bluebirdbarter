import React from "react"
import PropTypes from "prop-types"

import Navbar from './navbar'
import Footer from './footer'
import './styles.scss'

const Layout = ({ children }) => {

  return (
    <div>
      <Navbar />
      <section className="main-content columns is-fullheight">
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