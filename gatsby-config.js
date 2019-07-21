module.exports = {
  siteMetadata: {
    title: 'Health Site',
    description: 'A platform to spread knowledge and awareness of conditions like endometriosis, Ehler-Danlos Syndrome, POTS, and those of the autoimmune variety',
    author: '@themarquisdesheric',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'health-site',
        short_name: 'health site',
        start_url: '/',
        background_color: '#cab558',
        theme_color: '#cab558',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
