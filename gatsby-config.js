require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: `Blue Bird Barter`,
    description: `Nerd out with all your Blue Jays favorites`,
    twitter: `@kevin_sparling`,
    github: `@sparlingo`,
    author: 'Kevin Sparling'
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9rty98wh',
        dataset: 'development',
        token: process.env.MY_SANITY_TOKEN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: 'sparlingo.auth0.com',
        clientID: 'yhBWDsauIwnk5mVonVFxHGLiUJzSEvbp',
        redirectUri: 'http://localhost:8000',
        // audience: process.env.AUTH0_AUDIENCE, // Optional
        // responseType: process.env.AUTH0_RESPONSE_TYPE, // Optional
        // scope: process.env.AUTH0_SCOPE, // Optional
        callbackPath: "/auth/callback/", // Optional
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blue Bird Barter`,
        short_name: `BBB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/baseball_park.svg`
      },
    },
    `gatsby-plugin-offline`
  ]
}
