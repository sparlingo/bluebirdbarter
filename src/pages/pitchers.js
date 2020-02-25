import React from 'react'
import {graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'

export default ({data}) => {
  const pitchers = data.allSanityPitcher.edges
  return (
    <Layout>
      <div id="allHitters" className="container">
        {pitchers.map(pitcher => 
          <div className="card box">
            {pitcher.node.hand}
            <div className="card-image">
              <figure className="image is-2by3">

              </figure>
            </div>
            <div className="content">
              <p className="title is-3">{pitcher.node.person.name}</p>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">

              </div>
            </footer>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PitchersQuery {
    allSanityPitcher {
      edges {
        node {
          _id
          hand
          person {
            name
            bbrefId
            height
            weight
            slug {
              current
            }
            profile {
              asset {
                size
                url
                mimeType
              }
            }
          }
        }
      }
    }
  }
`