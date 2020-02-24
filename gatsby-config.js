//const proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Blue Bird Barter`,
    description: `Nerd out with all your Blue Jays favorites`,
    twitter: `@kevin_sparling`,
    github: `@sparlingo`,
    author: 'Kevin Sparling'
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blue Bird Barter`,
        short_name: `BBB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        }
      }
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://bluebirdbarter.netlify.com/`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // developMiddleware: app => {
  //   app.use("/.netlify/functions/", 
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },
}
