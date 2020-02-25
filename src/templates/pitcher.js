import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
  const pitcher = data.allSanityPitcher.edges[0].node
  return (
    <Layout>
      <article>
        <h1 class="title">
          {pitcher.person.name}
        </h1>
        <h3 class="subtitle">
          {pitcher.person.bbrefId}
        </h3>
      </article>
    </Layout>
  )
}


export const query = graphql`
  query PitcherQuery($slug: String!) {
    allSanityPitcher(filter: {person: {slug: {current: {eq: $slug}}}}) {
      edges {
        node {
          _id
          hand
          person {
            name
            bbrefId
            height
            weight
          }
        }
      }
    }
  }
`