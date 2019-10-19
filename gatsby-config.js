module.exports = {
  siteMetadata: {
    title: `Otter Chaos - FRC 4512`,
    description: `Learning and striving for better STEAM through high school robotics.`,
    author: `@otterchaos4512`,
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
      resolve: `gatsby-source-instagram`,
      options: {
        username: `otterchaos4512`,
        access_token: "a valid access token",
        instagram_id: "your instagram_business_account id",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
