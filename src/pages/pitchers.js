import React from 'react'
import {graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default ({data}) => {
  const pitchers = data.allSanityPitcher.edges
  return (
    <Layout>
      <div id="allHitters" className="card-container">
        {pitchers.map(pitcher => 
          <div className="card box">
            <div className="card-content">
              <div classname="media">
                <div classname="media-left">
                  <Img fixed={pitcher.node.person.profile.asset.fixed} />
                </div>
                <div className="media-content">
                  <p className="title is-4">{pitcher.node.person.name}</p>
                  <p className="subtitle is-6">{pitcher.node.person.slug.current}</p>
                </div>
              </div>
              <div className="content">
                <p>Look, this guy really sucked. Everyone liked him,
                  but he was just not a good baseball player. You maybe have
                  heard differently but take my word for it. This guy is/was
                  an absolute garbage human being.
                </p>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <span className="tag is-primary is-light is-large">Throws: {pitcher.node.hand}</span>
              </div>
              <div classname="card-footer-item">
                <span className="tag is-info is-light is-large">Starter</span>
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
                fixed (width: 60){
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
    }
  }
`