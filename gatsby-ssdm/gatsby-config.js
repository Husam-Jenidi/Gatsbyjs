/**
 * @type {import('gatsby').GatsbyConfig}
 */
/*after any change to this file your need to restart the server again*/
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
  ],
}
