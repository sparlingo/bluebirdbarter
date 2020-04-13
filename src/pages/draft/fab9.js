import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

export default ({data}) => {

  return (
    <Layout>
      <h1 className="mt-1">All-time Favorite Jays</h1>
      <div className="container mt-1">
        <ul className="step">
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="P">Pitcher</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="C">Catcher</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="1B">First Base</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="2B">Second Base</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="3B">Third Base</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="SS">Shortstop</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="LF">Left Field</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="CF">Centre Field</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="RF">Right Field</a>
          </li>
          <li className="step-item">
            <a href="#" className="tooltip" data-tooltip="DH">Designated Hitter</a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}