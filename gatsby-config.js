const title = 'XVI. Simonyi Konferencia';

module.exports = {
  siteMetadata: {
    title,
    description:
      'Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája.',
    language: 'hu',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: 'SimonyiKonf',
        start_url: '/',
        background_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
