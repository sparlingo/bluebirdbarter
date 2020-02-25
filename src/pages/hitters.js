import React from 'react'
import {graphql} from 'gatsby'

const Hitter = ({data}) => {
  <article>
    <h1>{data.allSanityHitter.nodes.person.name}</h1>
  </article>
}

export default Hitter

export const query = graphql`
  query HitterQuery {
  allSanityHitter {
    nodes {
      _id
      bats
      position
      throws
      person {
        name
      }
    }
  }
}
`