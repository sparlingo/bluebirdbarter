import React from 'react'
import { AuthService, useAuth } from 'gatsby-theme-auth0'
import { Link } from 'gatsby'
import { FaHome, FaBook, FaUser } from 'react-icons/fa'

// import './styles.scss'

export default () => {
  const { isLoggedIn, profile } = useAuth()
  
  return (
    <header className="navbar pl-1 pr-1 bg-dark">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-1 text-secondary">Blue Bird Barter</Link>
        <Link to="/research" className="btn text-light btn-link">Docs</Link>
        <Link to="/hitters" className="btn text-light btn-link">Hitters</Link>
        <Link to="/pitchers" className="btn text-light btn-link">Pitchers</Link>
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" />
          <button className="btn btn-primary input-group-btn btn-success">Search</button>
        </div>
        {isLoggedIn ? (
          <button className="btn btn-link" onClick={AuthService.logout}>Logout</button>
        ) : (
          <button className="btn btn-link" onClick={AuthService.login}>Login</button>
        )}
      </section>
    </header>
  )
}