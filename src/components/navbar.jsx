import React from 'react'
import { AuthService, useAuth } from 'gatsby-theme-auth0'
import { Link } from 'gatsby'
import { FaHome, FaBook, FaUser } from 'react-icons/fa'

// import './styles.scss'

export default () => {

  const { isLoggedIn, profile } = useAuth()
  
  return (
    //  {profile && <p>Hello `{profile.name}</p>}
   
    <header className="navbar">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-1">Blue Bird Barter</Link>
        <Link to="/research" className="btn btn-link">Docs</Link>
        <Link to="/hitters" className="btn btn-link">Hitters</Link>
        <Link to="/pitchers" className="btn btn-link">Pitchers</Link>
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" />
          <button className="btn btn-primary input-group-btn">Search</button>
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