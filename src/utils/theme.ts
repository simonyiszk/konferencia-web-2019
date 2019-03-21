import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    blue: '#357edd',
    darkPink: '#d5008f',
    moonGray: '#ceced2',
    navy: '#001b44',
    nearBlack: '#111111',
  },
  fonts: {
    body: "'Open Sans', system-ui",
    heading: 'Raleway, system-ui',
  },
  fontSizes: ['0.75rem', '1rem', '1.333rem', '1.778rem'],
  fontWeights: {
    bold: 600,
  },
  transitionTimingFunctions: {
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
};

export default theme;
