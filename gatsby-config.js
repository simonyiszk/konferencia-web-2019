const title = 'XVI. Simonyi Konferencia';

module.exports = {
  siteMetadata: {
    title,
    description:
      'Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája.',
    language: 'hu',
    event: {
      date: '2019-04-16',
      venue: 'BME I épület',
      address: '1117 Budapest, Magyar tudósok körútja 2.',
      embeddedMapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.888331773722!2d19.057752915809882!3d47.4726054791759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddabb29bd997%3A0x4b453205e2d0f96b!2zQk1FIEkgw6lww7xsZXQ!5e0!3m2!1shu!2shu!4v1552059603071',
      registrationURL:
        'https://www.eventbrite.com/e/xvi-simonyi-konferencia-tickets-58009396667',
    },
    contactEmail: 'konferencia@simonyi.bme.hu',
    social: {
      facebookURL: 'https://www.facebook.com/simonyiszk/',
      instagramURL: 'https://www.instagram.com/simonyikonferencia/',
      youTubeURL: 'https://www.youtube.com/user/SimonyiSzakkoli/',
    },
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          exclude: /hero/,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
