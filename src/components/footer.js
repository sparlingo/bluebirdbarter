import React from 'react'
import {StaticQuery, graphql } from 'gatsby'

const Footer = () => (
  <StaticQuery 
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            title
            twitter
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-light">
        <div className="content has-text-centered">
          <article className="media center">
            <p className="is-size-6">
              Made by Kevin Sparling, <a href={data.site.siteMetadata.github}>Github</a>
            </p>
          </article>
        </div>
      </footer>
    )}
  />
)

export default Footer