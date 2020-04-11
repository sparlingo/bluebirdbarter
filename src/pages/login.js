import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <section className="section">
      <h2 className="title">Login</h2>
      <div className="container">
        
      </div>
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LoginPage