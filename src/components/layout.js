import React from "react"
import PropTypes from "prop-types"

import Navbar from './navbar'
// import Footer from './footer'
// import './styles.scss'
import '../../node_modules/spectre.css/dist/spectre.min.css'
import '../../node_modules/spectre.css/dist/spectre-exp.min.css'

const Layout = ({ children }) => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout