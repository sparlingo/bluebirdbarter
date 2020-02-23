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
        name: `BBB`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: '9rty98wh',
    //     dataset: 'development',
    //     // a token with read permissions is required
    //     // if you have a private dataset
    //     token: process.env.MY_SANITY_TOKEN,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
