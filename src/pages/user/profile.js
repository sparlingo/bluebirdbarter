import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaUser, FaCheck } from 'react-icons/fa'


import ProfileSidebar from '../../components/profileSidebar'

export default () => {
  const [status, setStatus] = useState("loading")
  const [usernames, setUsernames] = useState(null);
  useEffect(() => {
    let canceled = false
    axios.get('.netlify/functions/get-all-users').then(result => {
      if (canceled === true) return
      if (status !== "loading")
      if (result.status !== 200) {
        console.error('Error loading notes')
        console.error(result)
        return
      }
      setUsernames(result.data.usernames)
      setStatus("loaded")
    })
    return () => {
      canceled = true
    }
  }, [status])
  return (
    <Layout>
     <SEO title="User Profile" />
      {/* <div className="container">
        <div className="columns">
          <ProfileSidebar />
          <div className="column is-half is-offset-one-fifth">
            <h1 className="title">My Profile</h1>
            {usernames ? (
              <ul>
                {usernames.map(username => (
                  <li>Username ${username} is taken</li>
                ))}
              </ul>
            ) : (
              <p>Loading usernames...</p>
            )}
            <form method="POST">
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
            </form>
          </div>
        </div>
      </div> */}
    </Layout>
  ) 
}
