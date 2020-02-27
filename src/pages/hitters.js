import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default ({data}) => {
  const hitters = data.allSanityHitter.edges
  return (
    <Layout>
      <div id="allHitters" className="card-container">
        {hitters.map(hitter => 
          <div className="card box">
            <div className="card-header columns">
              <div classname="media-left column">
                  <Img fixed={hitter.node.person.profile.asset.fixed} />
              </div>
              <div className="media-content column">
                <p className="title is-4">{hitter.node.person.name}</p>
                <p className="subtitle"><Link to={`/hitter/${hitter.node.person.slug.current}`}>@{hitter.node.person.slug.current}</Link></p>
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
                      <span className="tag is-dark">Position</span>
                      <span className="tag is-primary">{hitter.node.position}</span>
                    </div>
                  </div>
                  <div className="control">
                    <div className="tags is-medium has-addons">
                      <span className="tag is-dark">Bats</span>
                      <span className="tag is-info">{hitter.node.bats}</span>
                    </div>
                  </div>
                  <div className="control">
                    <div className="tags is-medium has-addons">
                      <span className="tag is-dark">Throws</span>
                      <span className="tag is-danger">{hitter.node.throws}</span>
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
  query HittersQuery {
    allSanityHitter {
      edges {
        node {
          _id
          bats
          throws
          position
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