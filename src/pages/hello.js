import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class HelloPage extends Component {
  state = { message: null }

  componentDidMount() {
    fetch('/.netlify/functions/hello')
      .then(res => res.json())
      .then(result => this.setState({ message: result.body.msg }))
  }

  render() {
    const { greeting } = this.state
    return (
      <Layout>
        <h1>Hello Lambda!</h1>
        <p>{greeting || 'loading...' }</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default HelloPage