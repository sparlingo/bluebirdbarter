import React from 'react'
import {graphql, Link} from 'gatsby'
import { useAuth } from 'gatsby-theme-auth0'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Layout from '../../components/layout'

export default ({data}) => {
  const { profile } = useAuth()
  //const pitchers = data.allSanityPitcher.edges

  return (
    <Layout>
      <span><h1 className="mt-1">Pick Your All-time Jays Team</h1></span>
      <div className="container mt-1">
        <ul className="step">
          <li className="step-item active">
            <a href="#sp" className="tooltip" data-tooltip="SP">Starting Pitcher</a>
          </li>
          <li className="step-item">
            <a href="#rp" className="tooltip" data-tooltip="RP">Relief Pitcher</a>
          </li>
          <li className="step-item">
            <a href="#c" className="tooltip" data-tooltip="C">Catcher</a>
          </li>
          <li className="step-item">
            <a href="#1b" className="tooltip" data-tooltip="1B">First Base</a>
          </li>
          <li className="step-item">
            <a href="#2b" className="tooltip" data-tooltip="2B">Second Base</a>
          </li>
          <li className="step-item">
            <a href="#3b" className="tooltip" data-tooltip="3B">Third Base</a>
          </li>
          <li className="step-item">
            <a href="#ss" className="tooltip" data-tooltip="SS">Shortstop</a>
          </li>
          <li className="step-item">
            <a href="#lf" className="tooltip" data-tooltip="LF">Left Field</a>
          </li>
          <li className="step-item">
            <a href="#cf" className="tooltip" data-tooltip="CF">Centre Field</a>
          </li>
          <li className="step-item">
            <a href="#rf" className="tooltip" data-tooltip="RF">Right Field</a>
          </li>
          <li className="step-item">
            <a href="#dh" className="tooltip" data-tooltip="DH">Designated Hitter</a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
