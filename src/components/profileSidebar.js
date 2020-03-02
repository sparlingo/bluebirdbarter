import React from 'react'

const ProfileSidebar = () => (
    <div className="column is-narrow">
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
        <p className="menu-label">
          Leagues
        </p>
        <ul className="menu-list">
          <li>Current Leagues</li>
          <li>Start a New League</li>
        </ul>
      </aside>
    </div>
)

export default ProfileSidebar