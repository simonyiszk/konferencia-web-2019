const title = 'XVI. Simonyi Konferencia';

module.exports = {
  siteMetadata: {
    title,
    description:
      'Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája',
    languageCode: 'hu',
    countryCode: 'HU',
    canonicalURL: 'https://konferencia.simonyi.bme.hu/',
    event: {
      date: '2019-04-16',
      venue: 'BME I épület',
      address: '1117 Budapest, Magyar tudósok körútja 2.',
      embeddedMapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.888331773722!2d19.057752915809882!3d47.4726054791759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddabb29bd997%3A0x4b453205e2d0f96b!2zQk1FIEkgw6lww7xsZXQ!5e0!3m2!1shu!2shu!4v1552059603071',
      registrationURL: 'https://simonyikonf.eventbrite.com/?aff=web',
    },
    contactEmail: 'konferencia@simonyi.bme.hu',
    social: {
      facebookURL: 'https://www.facebook.com/events/248329199450849/',
      instagramURL: 'https://www.instagram.com/simonyikonf/',
      youTubeURL: 'https://www.youtube.com/user/SimonyiSzakkoli/',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'staticAssets',
        path: `${__dirname}/static/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: title,
        short_name: 'SimonyiKonf',
        start_url: '/',
        background_color: '#fff',
        display: 'standalone',
        icon: 'src/assets/icon.png',
        icon_options: {
          purpose: 'any maskable',
        },
        /* eslint-enable */
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 92,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-svgr',
    'gatsby-plugin-typescript',
  ],
  mapping: {
    'ProgramsYaml.presenter.organization': 'OrganizationsYaml',
  },
};
