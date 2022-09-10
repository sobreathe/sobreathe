module.exports = {
  siteMetadata: {
    title: `So Breathe - Breathing App`,
    descriptipon: `Breathing exercises for sleep, anxiety, focus, stress. Reset your central nervous system.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WK44L89",
        includeInDevelopment: false,
        },
    },


  ],
}
