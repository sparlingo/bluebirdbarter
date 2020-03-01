import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
  const pitcher = data.sanityPitcherCareerStats
  return (
    <Layout>
      <article>
        <div className="container">
          <span>
            <h1 class="title">{pitcher.person.name}</h1>
            <h3 class="subtitle">{pitcher.person.bbrefId}</h3>
          </span>
          <table className="table">
            <thead>
              <tr>
                <th>Games</th>
                <th>Starts</th>
                <th>Batters Faced</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Hits</th>
                <th>Walks</th>
                <th>Strikeouts</th>
                <th>Earned Runs</th>
                <th>Shutouts</th>
                <th>Saves</th>
                <th>Opponent BA</th>
                <th>ERA</th>
              </tr>
            </thead>
            <tbody>
              <td>{pitcher.games}</td>
              <td>{pitcher.starts}</td>
              <td>{pitcher.bfp}</td>
              <td>{pitcher.wins}</td>
              <td>{pitcher.losses}</td>
              <td>{pitcher.hits}</td>
              <td>{pitcher.bb}</td>
              <td>{pitcher.so}</td>
              <td>{pitcher.er}</td>
              <td>{pitcher.shutouts}</td>
              <td>{pitcher.saves}</td>
              <td>{pitcher.baOpp.toFixed(3)}</td>
              <td>{pitcher.era.toFixed(2)}</td>
            </tbody>
          </table>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PitcherQuery($slug: String!) {
    sanityPitcherCareerStats(person: {slug: {current: {eq: $slug}}}) {
      baOpp
      bb
      bfp
      er
      era
      games
      hits
      losses
      person {
        name
        bbrefId
      }
      saves
      shutouts
      so
      starts
      wins
    }
  }

`