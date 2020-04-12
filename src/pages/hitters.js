import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default ({data}) => {
  const hitters = data.allSanityHitter.edges
  return (
    <Layout>
      <div id="allHitters" className="columns">
        {hitters.map(hitter =>
          <div className="column col-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="columns">
                <div className="col-8 card-header">
                  <div className="card-title h4">{hitter.node.person.name}</div>
                  <div className="card-subtitle text-gray">
                    <Link to={`/hitter/${hitter.node.person.slug.current}`}>@{hitter.node.person.slug.current}</Link>
                  </div>
                </div>
                <div className="card-image col-4 col-ml-auto">
                  <Img fixed={hitter.node.person.profile.asset.fixed} />
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
                      <figure className="avatar avatar-sm" data-initial={hitter.node.position} />
                      Position
                    </div>
                    <div className="chip">
                      <figure className="avatar avatar-sm" data-initial={hitter.node.bats} />
                      Bats
                    </div>
                    <div className="chip">
                      <figure className="avatar avatar-sm" data-initial={hitter.node.throws} />
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