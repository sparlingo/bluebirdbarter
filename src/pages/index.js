import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (  
    <Layout>
      <SEO title="Home" />
      <section className="hero is-fullheight is-info">
        <div className="hero-head">
          <div className="container">
            <h1 className="title">Blue Bird Barter</h1>
            <h2 className="subtitle">A baseball tranding game for nerds</h2>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Tweets</p>
                  <p className="title">3,456</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Following</p>
                  <p className="title">123</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Followers</p>
                  <p className="title">456K</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Likes</p>
                  <p className="title">789</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage