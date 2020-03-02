import React, { Component } from 'react'
//import Link from 'gatsby'
//import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaHome, FaBook, FaUser } from 'react-icons/fa'
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
      <nav className="navbar is-spaced has-shadow" role="navigation" aria-label="main-navigation">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Blue Bird Barter
          </Link>
        </div>
        <div className="navbar-end">
          <div className={`${menuActive}`}>
            <Link to="#" className="navbar-link" onClick={this.toggleMenu}>
              Menu
            </Link>
            <div className="navbar-dropdown is-flex-touch is-right is-block">
              <div className="buttons">
                <Link to="/" className="navbar-item is-tab">
                  <button className="button">
                    <span className="icon"><FaHome /></span>
                    <span>Home</span>
                  </button>
                </Link>
                <Link to="/research" className="navbar-item is-tab">
                  <button className="button">
                    <span className="icon"><FaBook /></span>
                    <span>Research</span>
                  </button>
                </Link>
                <Link to="/user/profile" className="navbar-item is-tab">
                  <button className="button">
                    <span className="icon"><FaUser /></span>
                    <span>Profile</span>
                  </button>
                </Link>
                <Link to="/hitters" className="navbar-item is-tab">
                  <button className="button">The Mashers</button>
                </Link>
                <Link to="/pitchers" className="navbar-item is-tab">
                  <button className="button">The Hurlers</button>
                </Link>
                <Link to="#" className="navbar-item is-tab">
                  <AuthBtn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar