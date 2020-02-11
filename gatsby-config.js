module.exports = {
  siteMetadata: {
    title: `Welcome to my portfolio site`,
    titleTemplate: "%s · Mayowa Adediran | Software Developer",
    description: `Mayowa Adediran's portfolio. Software developer from Lagos, Nigeria`,
    author: `@mayowaadediran`,
    siteUrl: `https://mayowaadediran.me`,
    image: "/images/mans_not_smiling.png"
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `Mayowa Adediran's Personal Site`,
        short_name: `Mayowa Adediran`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.html": ["cache-control: public, max-age=0, must-revalidate"],
          "public/page-data/": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157795684-1",
        head: true,
      },
    },
  ],
}
