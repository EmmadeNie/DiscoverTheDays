module.exports = {
  siteMetadata: {
    title: `Discover days of the Week`,
    description: `Inspired by Thailand with Love`
  },
  plugins: [`gatsby-transformer-json`, {resolve: `gatsby-source-filesystem`, options: {path: `./src/data/`}}],
};
