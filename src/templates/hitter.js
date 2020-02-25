import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
  const hitter = data.allSanityHitter.edges
  return (
    <Layout>
      <article>
        {hitter.map(edge => 
          <h1 class="title">
            {edge.node.person.name}
          </h1>  
        )}
        <h1 className="title">
        </h1>
      </article>
    </Layout>
  )
}


export const query = graphql`
  query HitterQuery($slug: String!) {
    allSanityHitter(filter: {person: {slug: {current: {eq: $slug}}}}) {
    edges {
      node {
        _id
        throws
        position
        bats
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