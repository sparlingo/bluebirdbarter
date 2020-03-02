import React from 'react'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaUser, FaCheck } from 'react-icons/fa'


import ProfileSidebar from '../../components/profileSidebar'

const ProfilePage = () => (
  <Layout>
    <SEO title="User Profile" />

      <div className="container">
        <div className="columns">
          <ProfileSidebar />
          <div className="column is-half is-offset-one-fifth">
            <h1 className="title">My Profile</h1>
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="text" placeholder="Desired Username" value="" />
                <span className="icon is-small is-left">
                  <FaUser />
                </span>
                <span className="icon is-small is-right">
                  <FaCheck />
                </span>
              </div>
              <p className="help is-success">This username is available</p>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default ProfilePage