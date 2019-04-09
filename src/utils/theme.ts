import { DefaultTheme } from 'styled-components';

const fonts = {
  body: "'Open Sans', system-ui",
  heading: 'Raleway, system-ui',
};

const fontSizes = ['0.875rem', '1rem', '1.333rem', '1.778rem'];

const fontWeights = {
  bold: 600,
};

const theme: DefaultTheme = {
  colors: {
    blue: '#357edd',
    darkPink: '#d5008f',
    darkGray: '#333333',
    moonGray: '#ceced2',
    navy: '#001b44',
    nearBlack: '#111111',
  },
  fonts,
  fontSizes,
  fontWeights,
  transitionTimingFunctions: {
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: fontSizes[0],
      fontWeight: fontWeights.bold,
    },
  },
};

export default theme;
