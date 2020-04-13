import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default ({data}) => {
  const moments = data.allSanityMoment.edges
  return (
    <Layout>
      <div className="container mt-2">
        <h3>Great Moments in Blue Jays History</h3>
        <div className="columns">
          <div className="column col-1"></div>
          <div className="column col-3 col-sm-12">
            <div className="timeline">
              {moments.map(moment => 
                <div className="timeline-item" id={moment.node.slug.current}>
                  <div className="timeline-left">
                    <a className="timeline-icon icon-lg tooltip" href={moment.node.slug.current} data-tooltip={moment.node.date}>
                      <i class="icon icon-check"></i>
                    </a>
                  </div>
                  <div className="timeline-content">
                    <div className="tile">
                      <div className="tile-content">
                        <p className="tile-subtitle">{moment.node.date}</p>
                        <p className="tile-title">{moment.node.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MomentsQuery {
    allSanityMoment {
      edges {
        node {
          _id
          date
          title
          slug {
            current
          }
        }
      }
    }
  }
`
