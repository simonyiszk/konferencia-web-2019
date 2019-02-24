import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import BackgroundURL from '../assets/hero/background.svg';

type Props = SpaceProps;

const Hero = styled.div<Props>`
  min-height: 100vh;
  background: url(${BackgroundURL}) center / cover;
  color: white;
  ${space};
  text-align: center;
`;

export default Hero;
