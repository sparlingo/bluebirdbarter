import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     stats: {}
  //   }
  // }

  const hitter = data.sanityHitterCareerStats
  return (
    <Layout>
      <article>
        <div className="container">
          <h1 className="title">
            {hitter.person.name}
          </h1>
          <h1 className="subtitle">
            {hitter.person.bbrefId}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>Games</th>
                <th>At Bats</th>
                <th>Hits</th>
                <th>Doubles</th>
                <th>Triples</th>
                <th>Home Runs</th>
                <th>RBI</th>
                <th>Strikeouts</th>
                <th>Stolen Bases</th>
                <th>Caught Stealing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{hitter.games}</td>
                <td>{hitter.atBats}</td>
                <td>{hitter.hits}</td>
                <td>{hitter.doubles}</td>
                <td>{hitter.triples}</td>
                <td>{hitter.hr}</td>
                <td>{hitter.rbi}</td>
                <td>{hitter.so}</td>
                <td>{hitter.sb}</td>
                <td>{hitter.cs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query HitterCareerQuery($slug: String!) {
    sanityHitterCareerStats(person: {slug: {current: {eq: $slug}}}) {
      atBats
      cs
      doubles
      games
      hits
      hr
      person {
        name
        bbrefId
      }
      rbi
      runs
      sb
      so
      triples
    }
  }
`