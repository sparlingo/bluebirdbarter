import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProfilePage = () => (
  <Layout>
    <SEO title="User Profile" />
    <div className="container">
      <aside className="menu">
        <p className="menu-label">
          User Settings
        </p>
        <ul className="menu-list">
          <li>My Profile</li>
        </ul>
        <p className="menu-label">
          Teams
        </p>
        <ul className="menu-list">
          <li>Current Teams</li>
          <li>Make A New Team</li>
        </ul>
      </aside>
    </div>
    
  </Layout>
)

export default ProfilePage