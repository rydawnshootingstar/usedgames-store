/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: "Ryan Feller",
    title: "Feller Used Games 🎮",
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    // delivers our own font files
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Oswald", "PassionOne"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `UsedGamesNetlify`,
        accessToken: process.env.SHOPIFY_STORE_API_KEY,
        apiVersion: `2020-04`,
        verbose: true,
        paginationSize: 250,
        includeCollections: ["shop"],
      },
    },
  ],
}
