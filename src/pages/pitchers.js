import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default ({data}) => {
  const pitchers = data.allSanityPitcher.edges
  return (
    <Layout>
      <div id="allPitchers" className="card-container">
        {pitchers.map(pitcher => 
          <div className="card box">
            <div className="card-header columns">
              <div classname="media-left column">
                  <Img fixed={pitcher.node.person.profile.asset.fixed} />
              </div>
              <div className="media-content column">
                <p className="title is-4">{pitcher.node.person.name}</p>
                <p className="subtitle"><Link to={`/pitcher/${pitcher.node.person.slug.current}`}>@{pitcher.node.person.slug.current}</Link></p>
              </div>
            </div>
            <div className="card-content">
              <p>I don't have any evidence, but this guy slapped more ass that anyone who has
                ever played for the Jays. Like he was the king of slap-ass, world champ! 
                After taking a shower people avoided this guy like the plague.
              </p>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <div className="field is-grouped">
                  <div className="control">
                    <div className="tags is-medium has-addons">
                      <span className="tag is-dark">Weight</span>
                      <span className="tag is-primary">{pitcher.node.person.weight}</span>
                    </div>
                  </div>
                  <div className="control">
                    <div className="tags is-medium has-addons">
                      <span className="tag is-dark">Height</span>
                      <span className="tag is-info">{pitcher.node.person.height}</span>
                    </div>
                  </div>
                  <div className="control">
                    <div className="tags is-medium has-addons">
                      <span className="tag is-dark">Throws</span>
                      <span className="tag is-danger">{pitcher.node.hand}</span>
                    </div>
                  </div>
                </div>
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