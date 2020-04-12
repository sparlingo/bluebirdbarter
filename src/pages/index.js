import React from "react"
//import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (  
    <Layout>
      <SEO title="Home" />
      <div className="hero hero-lg bg-primary">
        <div className="hero-body">
          <h1 className="title">Blue Bird Barter</h1>
          <h2 className="subtitle">A baseball tranding game for nerds</h2>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage