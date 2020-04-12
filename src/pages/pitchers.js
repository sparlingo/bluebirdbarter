import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default ({data}) => {
  const pitchers = data.allSanityPitcher.edges
  return (
    <Layout>
      <div id="allHitters" className="columns">
        {pitchers.map(pitcher =>
          <div className="column col-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="columns">
                <div className="col-8 card-header">
                  <div className="card-title h4">{pitcher.node.person.name}</div>
                  <div className="card-subtitle text-gray">
                    <Link to={`/hitter/${pitcher.node.person.slug.current}`}>@{pitcher.node.person.slug.current}</Link>
                  </div>
                </div>
                <div className="card-image col-4 col-ml-auto">
                  <Img fixed={pitcher.node.person.profile.asset.fixed} />
                </div>
              </div>
              
              <div className="card-body">
                <p>I don't have any evidence, but this guy slapped more ass that anyone who has
                  ever played for the Jays. Like he was the king of slap-ass, world champ! 
                  After taking a shower people avoided this guy like the plague.
                </p>
              </div>
              <div className="card-footer">
                <div className="columns">
                  <div className="column col-12">
                    <div className="chip">
                      <figure className="avatar avatar-sm" data-initial={pitcher.node.person.weight} />
                      Weight
                    </div>
                    <div className="chip">
                      <figure className="avatar avatar-sm" data-initial={pitcher.node.person.height} />
                      Height
                    </div>
                    <div className="chip">
                      <figure className="avatar avatar-sm" data-initial={pitcher.node.hand} />
                      Throws
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                fixed (width: 80){
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