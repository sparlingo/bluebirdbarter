import React, { Component } from 'react'
//import Link from 'gatsby'
//import PropTypes from "prop-types"
import { FaHome, FaBook, FaUser, FaSignInAlt } from 'react-icons/fa'
import AuthBtn from './authBtn'


import './styles.scss'

class Navbar extends Component {
  
  state = { showMenu: false }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  
  render() {
    const menuActive = this.state.showMenu ? 'navbar-item has-dropdown is-hoverable is-active': 'navbar-item has-dropdown is-hoverable'

    return (
      <nav className="navbar has-shadow" role="navigation" aria-label="main-navigation">
        <div className="navbar-start">
          <a className="navbar-item">
            Blue Bird Barter
          </a>
          <a className="navbar-item">
            <AuthBtn />
          </a>
         
        </div>
        <div className="navbar-end">
          <div className={`${menuActive}`}>
            <a className="navbar-link" onClick={this.toggleMenu}>
              Menu
            </a>
            <div className="navbar-dropdown is-right">
              <a className="navbar-item is-tab">
                <FaHome />
              </a>
              <a className="navbar-item is-tab">
                <FaBook />
              </a>
              <a className="navbar-item is-tab">
                <FaUser />
              </a>
              <a className="navbar-item is-tab">
                <FaSignInAlt />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar