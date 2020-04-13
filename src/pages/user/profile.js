import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaUser, FaCheck } from 'react-icons/fa'


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
     <div className="container mt-2">
      <ul className="nav">
        <li className="nav-item">
          <a href="#">My Profile</a>
        </li>
        <li className="nav-item">
          <a href="#">My Teams</a>
          <ul className="nav">
            <li className="nav-item">
              <a href="#">My Fab 9</a>
            </li>
            <li className="nav-item">
              <a href="#">Drafted Teams</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#">My Leagues</a>
          <ul className="nav">
            <li className="nav-item">
              <a href="#">Active Leagues</a>
            </li>
            <li className="nav-item">
              <a href="#">Past Leagues</a>
            </li>
          </ul>
        </li>
      </ul>
     </div>
     
      {/* <div classNameName="container">
        <div classNameName="columns">
          <ProfileSidebar />
          <div classNameName="column is-half is-offset-one-fifth">
            <h1 classNameName="title">My Profile</h1>
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
              <div classNameName="field">
                <label classNameName="label">Username</label>
                <div classNameName="control has-icons-left has-icons-right">
                  <input classNameName="input is-success" type="text" placeholder="Desired Username" value="" />
                  <span classNameName="icon is-small is-left">
                    <FaUser />
                  </span>
                  <span classNameName="icon is-small is-right">
                    <FaCheck />
                  </span>
                </div>
                <p classNameName="help is-success">This username is available</p>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </Layout>
  ) 
}
