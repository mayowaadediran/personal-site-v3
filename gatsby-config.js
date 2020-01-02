module.exports = {
  siteMetadata: {
    title: `Mayowa Adediran`,
    description: `Mayowa Adediran's real estate on the internet`,
    author: `@mayowaadediran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         path: `${__dirname}/src/markdown-pages`,
         name: `markdown-pages`,
       },
     },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pqyrqgwwmcgh`,
        accessToken: `im80xzuokd1dxUwkE2F8PD3WaR0PxX1M0W5ZuG9WKX8`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
