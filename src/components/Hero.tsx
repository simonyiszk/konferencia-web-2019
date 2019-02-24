import styled from 'styled-components';

import BackgroundURL from '../assets/hero/background.svg';

const Hero = styled.div`
  min-height: 100vh;
  background: url(${BackgroundURL}) center / cover;
  color: white;
  text-align: center;
`;

export default Hero;
