/**
 * @type {import('gatsby').GatsbyConfig}
 */
/*after any change to this file your need to restart the server again*/
module.exports = {
    siteMetadata: {
        title:"Gatsby-SSD",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        // {
        //     resolve: "gatsby-source-filesystem",
        //     options: {
        //         name: `blog`,
        //         path: `${__dirname}/blog`,
        //     } },

    ],
};