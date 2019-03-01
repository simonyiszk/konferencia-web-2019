import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import BGLayer01URL from '../assets/hero/01-background.svg';
import BGLayer02URL from '../assets/hero/02-stripes.svg';
import BGLayer03URL from '../assets/hero/03-stars.svg';
import BGLayer04URL from '../assets/hero/04-planets.svg';
import BGLayer05URL from '../assets/hero/05-flying-saucer.svg';
import BGLayer06URL from '../assets/hero/06-ground.svg';
import BGLayer07URL from '../assets/hero/07-rocks.svg';
import BGLayer08URL from '../assets/hero/08-rocket.svg';
import BGLayer09URL from '../assets/hero/09-thinking-monster.svg';

type Props = SpaceProps;

const Hero = styled.div<Props>`
  min-height: 100vh;
  background: url(${BGLayer09URL}) 20% 100% / 30vh no-repeat,
    url(${BGLayer08URL}) center / cover, url(${BGLayer07URL}) center / cover,
    url(${BGLayer06URL}) center / cover, url(${BGLayer05URL}) center / cover,
    url(${BGLayer04URL}) center / cover, url(${BGLayer03URL}) center / cover,
    url(${BGLayer02URL}) center / cover, url(${BGLayer01URL}) center / cover;
  color: white;
  ${space};
  text-align: center;
`;

export default Hero;
